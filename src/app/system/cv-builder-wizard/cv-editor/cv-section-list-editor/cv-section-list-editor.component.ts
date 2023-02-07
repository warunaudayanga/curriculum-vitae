import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { SectionType } from "../../../../core/enums/section-type.enum";
import { PreDefinedSection, Section } from "../../../../core/interfaces/section.interfaces";
import { v4 as uuid } from "uuid";

@Component({
    selector: "app-cv-section-list-editor",
    templateUrl: "./cv-section-list-editor.component.html",
    styleUrls: ["./cv-section-list-editor.component.scss"],
})
export class CvSectionListEditorComponent implements OnInit {
    @Input() sections: Section[] = [];

    @Input() preDefined?: Section[];

    @Input() sidebar: boolean = false;

    @Output() sectionsChange: EventEmitter<Section[]> = new EventEmitter<Section[]>();

    sectionTypes: SectionType[] = Object.values(SectionType);

    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {
        if (this.sidebar) {
            this.sectionTypes = Object.values(SectionType).filter(type => type !== SectionType.COLUMNS);
        }
    }

    getPreDefinedTypes(): PreDefinedSection[] {
        return this.preDefined?.map(section => ({ id: section.id, name: section.title })) || [];
    }

    addSection(typeOrPreDefined: SectionType | PreDefinedSection): void {
        if (typeof typeOrPreDefined === "object") {
            this.sections.push({
                ...this.preDefined!.find(section => section.id === typeOrPreDefined.id)!,
                id: uuid(),
            });
        } else {
            const section: Section = { id: uuid(), type: typeOrPreDefined, title: "" };
            if (typeOrPreDefined === SectionType.LIST) {
                section.list = [{ id: uuid(), title: "" }];
            }
            if (typeOrPreDefined === SectionType.LIST_WITH_PARAGRAPH) {
                section.listWithParagraph = {
                    title: "",
                    list: [{ id: uuid(), title: "" }],
                };
            }
            if (typeOrPreDefined === SectionType.NAME_VALUE_LIST) {
                section.keyValueList = [{ id: uuid(), title: "", value: "" }];
            }
            if (typeOrPreDefined === SectionType.COLUMNS) {
                section.columns = [{ lines: [""] }, { lines: [""] }];
            }
            this.sections.push(section);
        }
        this.sectionsChange.emit(this.sections);
        setTimeout(() => {
            const lastItem = this.elementRef.nativeElement.querySelector("app-x-item:last-of-type") as HTMLDivElement;
            lastItem.scrollIntoView({ behavior: "smooth" });
        });
    }

    deleteSection(id: string | number): void {
        this.sections = this.sections.filter(section => section.id !== id);
        this.sectionsChange.emit(this.sections);
    }

    onSectionChange(section: Section, i: number): void {
        this.sections[i] = section;
        this.sectionsChange.emit(this.sections);
    }

    onMoveUp(id: string | number, i: number): void {
        this.sections.splice(i - 1, 0, this.sections.splice(i, 1)[0]);
        this.sectionsChange.emit(this.sections);
        setTimeout(() => {
            this.elementRef.nativeElement
                .querySelector(`#section-${id}`)
                .scrollIntoView({ block: "start", behavior: "smooth" });
        });
    }

    onMoveDown(id: string | number, i: number): void {
        this.sections.splice(i + 1, 0, this.sections.splice(i, 1)[0]);
        this.sectionsChange.emit(this.sections);
        setTimeout(() => {
            this.elementRef.nativeElement
                .querySelector(`#section-${id}`)
                .scrollIntoView({ block: "start", behavior: "smooth" });
        });
    }
}
