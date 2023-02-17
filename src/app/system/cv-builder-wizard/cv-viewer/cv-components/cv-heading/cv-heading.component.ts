import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output } from "@angular/core";
import { Modal } from "bootstrap";

@Component({
    selector: "app-cv-heading",
    templateUrl: "./cv-heading.component.html",
    styleUrls: ["./cv-heading.component.scss"],
})
export class CVHeadingComponent implements AfterViewInit {
    @Input() editable: boolean = false;

    @Input() name: string = "";

    @Input() title: string = "";

    @Input() nameFontSize: number = 25;

    @Input() nameLineHeight: number = 25;

    @Input() titleFontSize: number = 20;

    @Input() titleLineHeight: number = 20;

    @Input() includeImage: boolean = true;

    @Input() image: string = "";

    @Input() imageWidth: number = 120;

    @Input() imageHeight: number = 150;

    @Output() imageSelect: EventEmitter<File> = new EventEmitter<File>();

    @Output() imageRemove: EventEmitter<void> = new EventEmitter<void>();

    alertModal?: Modal;

    alertMessage?: string;

    constructor(private elementRef: ElementRef) {}

    ngAfterViewInit(): void {
        if (!this.includeImage || !this.image) this.elementRef.nativeElement.classList.add("no-image");
        this.alertModal = new Modal("#headingAlertModal");
    }

    setImage(event: Event): void {
        const imageFile = (event.target as HTMLInputElement).files?.[0];
        if (imageFile?.type.match(/image\/*/)) {
            if (imageFile.size > 1000000) {
                this.alertMessage = "The image is too large. Please upload an image less than 1MB.";
                this.alertModal?.show();
                return;
            }
            this.imageSelect.emit(imageFile);
            (event.target as HTMLInputElement).value = "";
        }
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    removeImage(e: MouseEvent) {
        e.stopPropagation();
        // eslint-disable-next-line no-alert
        if (confirm("Are you sure you want to remove the signature?")) {
            this.image = "";
            this.imageRemove.emit();
        }
    }
}
