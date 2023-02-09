import { AfterViewInit, Component, ElementRef, Input } from "@angular/core";

@Component({
    selector: "app-cv-contacts",
    templateUrl: "./cv-contacts.component.html",
    styleUrls: ["./cv-contacts.component.scss"],
})
export class CVContactsComponent implements AfterViewInit {
    @Input() email?: string;

    @Input() phoneNumbers?: string[];

    @Input() address?: string;

    @Input() fontSize: number = 15;

    @Input() iconSize: number = 16;

    @Input() editable: boolean = false;

    @Input() space: number = 0;

    constructor(private elementRef: ElementRef) {}

    ngAfterViewInit(): void {
        if (!this.editable && !this.email && !this.phoneNumbers?.length && !this.address)
            this.elementRef.nativeElement.style.paddingTop = "0px";
    }
}
