import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { SectionType } from "../../../../core/enums/section-type.enum";
import { Section } from "../../../../core/interfaces/system.interfaces";

@Component({
    selector: "app-x-section",
    templateUrl: "./x-section.component.html",
    styleUrls: ["./x-section.component.scss"],
})
export class XSectionComponent {
    @ViewChild("titleInput") titleInput?: ElementRef<HTMLInputElement>;

    @Input() position!: "first" | "middle" | "last";

    @Input() section?: Section;

    @Output() sectionChange: EventEmitter<Section> = new EventEmitter<Section>();

    @Output() onMoveUp: EventEmitter<string | number> = new EventEmitter<string | number>();

    @Output() onMoveDown: EventEmitter<string | number> = new EventEmitter<string | number>();

    @Output() onRemove: EventEmitter<string | number> = new EventEmitter<string | number>();

    editTitle: boolean = false;

    SectionType = SectionType;

    constructor() {}

    showTitleInput(): void {
        this.editTitle = true;
        setTimeout(() => {
            this.titleInput?.nativeElement.select();
        });
    }

    onSectionChange(): void {
        this.sectionChange.emit(this.section);
    }

    moveUp(id: string | number): void {
        this.onMoveUp.emit(id);
    }

    moveDown(id: string | number): void {
        this.onMoveDown.emit(id);
    }

    remove(id: string | number): void {
        // eslint-disable-next-line no-alert
        if (confirm("Are you sure you want to remove this section?")) this.onRemove.emit(id);
    }
}
