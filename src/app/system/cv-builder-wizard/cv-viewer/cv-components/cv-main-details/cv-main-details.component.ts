import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Section } from "../../../../../core/interfaces/section.interfaces";

@Component({
    selector: "app-main-details",
    templateUrl: "./cv-main-details.component.html",
    styleUrls: ["./cv-main-details.component.scss"],
})
export class CVMainDetailsComponent implements OnInit, AfterViewInit {
    @Input() sections?: Section[];

    @Input() test?: string;

    @Output() forward: EventEmitter<Section[]> = new EventEmitter<Section[]>();

    acceptedSectionIndexes?: number[];

    generatedSections: Section[] = [];

    constructor(private elementRef: ElementRef<HTMLDivElement>) {}

    ngOnInit(): void {
        this.acceptedSectionIndexes = this.sections?.map((section, i) => i) || [];
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            if (this.elementRef.nativeElement.offsetHeight < this.elementRef.nativeElement.scrollHeight) {
                this.generatedSections.pop();
            }
            this.acceptedSectionIndexes = this.generatedSections.map((section, i) => i);
            const forwardSections = this.sections?.filter((section, i) => !this.acceptedSectionIndexes?.includes(i));
            if (forwardSections?.length) this.forward.emit(forwardSections);
        });
    }

    checkAccepted(i: number): boolean {
        return Boolean(this.acceptedSectionIndexes?.includes(i));
    }

    checkHeight(section: Section): false {
        if (
            this.elementRef.nativeElement.offsetHeight >= this.elementRef.nativeElement.scrollHeight &&
            !this.generatedSections.includes(section)
        ) {
            this.generatedSections.push(section);
        }
        return false;
    }
}
