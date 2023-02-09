import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Section } from "../../../../../core/interfaces/system.interfaces";
import { ConfigsStateModel } from "../../../../../core/state/configs";
import { Globals } from "../../../../configs/globals";

@Component({
    selector: "app-main-details",
    templateUrl: "./cv-main-details.component.html",
    styleUrls: ["./cv-main-details.component.scss"],
})
export class CVMainDetailsComponent implements OnInit, AfterViewInit {
    @Input() sections?: Section[];

    @Input() configs?: ConfigsStateModel;

    @Output() forward: EventEmitter<Section[]> = new EventEmitter<Section[]>();

    acceptedSectionIndexes?: number[];

    generatedSections: Section[] = [];

    SECTION_SPACE = Globals.DEFAULTS.CONFIGS.SECTION_SPACE;

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
