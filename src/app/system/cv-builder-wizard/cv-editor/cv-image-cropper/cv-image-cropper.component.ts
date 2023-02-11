import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ImageCroppedEvent } from "ngx-image-cropper";

@Component({
    selector: "app-cv-image-cropper",
    templateUrl: "./cv-image-cropper.component.html",
    styleUrls: ["./cv-image-cropper.component.scss"],
})
export class CvImageCropperComponent {
    @Input() imageFile?: File;

    @Input() aspectRatio: number = 1;

    @Output() onCrop: EventEmitter<string> = new EventEmitter<string>();

    croppedImage?: string | null = "";

    constructor() {}

    imageCropped(event: ImageCroppedEvent): void {
        this.croppedImage = event.base64;
    }

    cancelCrop(): void {
        this.imageFile = undefined;
    }

    cropImage(): void {
        this.onCrop.emit(this.croppedImage!);
        this.imageFile = undefined;
    }
}
