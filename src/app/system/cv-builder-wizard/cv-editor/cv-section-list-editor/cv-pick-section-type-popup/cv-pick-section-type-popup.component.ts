import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from "@angular/core";
import { PreDefinedSection } from "../../../../../core/interfaces/system.interfaces";

@Component({
    selector: "app-cv-pick-section-type-popup",
    templateUrl: "./cv-pick-section-type-popup.component.html",
    styleUrls: ["./cv-pick-section-type-popup.component.scss"],
})
export class CVPickSectionTypePopupComponent {
    @Input() items!: any[];

    @Input() preDefined!: PreDefinedSection[];

    @Input() labelKey?: string | number | symbol;

    @Input() valueKey?: string | number | symbol;

    @Output() onDismiss: EventEmitter<void> = new EventEmitter<void>();

    @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

    opened: boolean = false;

    openTimeout?: NodeJS.Timeout;

    constructor(private elementRef: ElementRef<HTMLElement>) {}

    @HostListener("window:click", ["$event"])
    onClick(event: MouseEvent): void {
        if (this.opened && !this.elementRef.nativeElement.contains(event.target as HTMLElement)) {
            this.close();
        }
    }

    select(item: any, id?: string | number): void {
        this.close();
        if (id) {
            this.onSelect.emit({ id, name: item });
            return;
        }
        this.onSelect.emit(this.valueKey && item?.[this.valueKey] ? item[this.valueKey] : item);
    }

    open(): void {
        this.elementRef.nativeElement.style.display = "block";
        this.openTimeout = setTimeout(() => {
            this.opened = true;
        }, 10);
    }

    close(): void {
        clearTimeout(this.openTimeout);
        this.opened = false;
        this.elementRef.nativeElement.style.display = "none";
        this.onDismiss.emit();
    }
}
