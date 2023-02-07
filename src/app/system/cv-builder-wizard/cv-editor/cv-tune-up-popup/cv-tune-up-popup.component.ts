import { Component, ElementRef, EventEmitter, HostListener, Output } from "@angular/core";

@Component({
    selector: "app-cv-tune-up-popup",
    templateUrl: "./cv-tune-up-popup.component.html",
    styleUrls: ["./cv-tune-up-popup.component.scss"],
})
export class CvTuneUpPopupComponent {
    @Output() onDismiss: EventEmitter<void> = new EventEmitter<void>();

    opened: boolean = false;

    openTimeout?: NodeJS.Timeout;

    constructor(private elementRef: ElementRef<HTMLElement>) {}

    @HostListener("window:click", ["$event"])
    onClick(event: MouseEvent): void {
        if (this.opened && !this.elementRef.nativeElement.contains(event.target as HTMLElement)) {
            this.close();
        }
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
