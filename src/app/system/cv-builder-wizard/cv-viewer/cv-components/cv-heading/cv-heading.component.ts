import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-cv-heading",
    templateUrl: "./cv-heading.component.html",
    styleUrls: ["./cv-heading.component.scss"],
})
export class CVHeadingComponent implements AfterViewInit {
    @Input() editable: boolean = false;

    @Input() title: string = "";

    @Input() fontSize: number = 25;

    @Input() includeImage: boolean = true;

    @Input() image: string = "";

    @Input() imageWidth: number = 120;

    @Input() imageHeight: number = 150;

    @Output() imageSelect: EventEmitter<string> = new EventEmitter<string>();

    constructor(private elementRef: ElementRef) {}

    ngAfterViewInit(): void {
        if (!this.includeImage || !this.image) this.elementRef.nativeElement.classList.add("no-image");
    }

    async setImage(e: Event): Promise<void> {
        const imageFile = (e.target as HTMLInputElement).files?.[0];
        if (imageFile?.type.match(/image\/*/)) {
            const image = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (event: any): void => {
                    resolve(event.target.result);
                };
                reader.onerror = (error): void => {
                    reject(error);
                };
                reader.readAsDataURL(imageFile);
            });
            this.imageSelect.emit(image as string);
        }
    }
}
