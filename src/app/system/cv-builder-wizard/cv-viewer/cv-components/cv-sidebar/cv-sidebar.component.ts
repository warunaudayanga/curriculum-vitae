import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { Section } from "../../../../../core/interfaces/system.interfaces";
import { BottomShapeComponent } from "./shapes/bottom-shape/bottom-shape.component";
import { ConfigsStateModel } from "../../../../../core/state/configs";
import { Globals } from "../../../../configs/globals";

@Component({
    selector: "app-sidebar",
    templateUrl: "./cv-sidebar.component.html",
    styleUrls: ["./cv-sidebar.component.scss"],
})
export class CVSidebarComponent implements OnInit, AfterViewInit {
    @ViewChild(BottomShapeComponent, { read: ElementRef }) bottomShape!: ElementRef<HTMLElement>;

    @Input() firstPage?: boolean = false;

    @Input() sidebar?: Section[];

    @Input() configs?: ConfigsStateModel;

    @Input() refereesUpon?: boolean;

    @Output() forward: EventEmitter<Section[]> = new EventEmitter<Section[]>();

    @Input() test?: boolean = false;

    acceptedSectionIndexes?: number[];

    generatedSections: Section[] = [];

    SECTION_SPACE = Globals.DEFAULTS.configs.sectionSpace;

    SIDEBAR_PADDING = Globals.DEFAULTS.configs.sidebarPadding;

    constructor(private elementRef: ElementRef<HTMLDivElement>) {}

    ngOnInit(): void {
        this.acceptedSectionIndexes = this.sidebar?.map((section, i) => i) || [];
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            if (this.elementRef.nativeElement.offsetHeight - 20 < this.elementRef.nativeElement.scrollHeight - 1130) {
                this.generatedSections.pop();
            }
            this.acceptedSectionIndexes = this.generatedSections.map((section, i) => i);
            const forwardSections = this.sidebar?.filter((section, i) => !this.acceptedSectionIndexes?.includes(i));
            if (forwardSections?.length) this.forward.emit(forwardSections);
        });
    }

    checkAccepted(i: number): boolean {
        return Boolean(this.acceptedSectionIndexes?.includes(i));
    }

    checkHeight(section: Section): false {
        if (this.elementRef.nativeElement.offsetHeight - 20 >= this.elementRef.nativeElement.scrollHeight - 1130) {
            this.generatedSections.push(section);
        }
        return false;
    }
}
