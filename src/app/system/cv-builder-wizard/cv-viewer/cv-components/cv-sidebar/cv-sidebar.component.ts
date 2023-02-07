import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { Section } from "../../../../../core/interfaces/section.interfaces";
import { BottomShapeComponent } from "./shapes/bottom-shape/bottom-shape.component";

@Component({
    selector: "app-sidebar",
    templateUrl: "./cv-sidebar.component.html",
    styleUrls: ["./cv-sidebar.component.scss"],
})
export class CVSidebarComponent implements OnInit, AfterViewInit {
    @ViewChild(BottomShapeComponent, { read: ElementRef }) bottomShape!: ElementRef<HTMLElement>;

    @Input() sidebar?: Section[];

    @Output() forward: EventEmitter<Section[]> = new EventEmitter<Section[]>();

    @Input() test?: boolean = false;

    acceptedSectionIndexes?: number[];

    generatedSections: Section[] = [];

    constructor(private elementRef: ElementRef<HTMLDivElement>) {}

    ngOnInit(): void {
        this.acceptedSectionIndexes = this.sidebar?.map((section, i) => i) || [];
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            if (this.elementRef.nativeElement.offsetHeight < this.elementRef.nativeElement.scrollHeight - 1130) {
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
        if (this.elementRef.nativeElement.offsetHeight >= this.elementRef.nativeElement.scrollHeight - 1130) {
            this.generatedSections.push(section);
        }
        return false;
    }
}
