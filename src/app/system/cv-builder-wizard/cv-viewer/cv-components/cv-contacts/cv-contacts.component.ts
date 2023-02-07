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

    constructor(private elementRef: ElementRef) {}

    ngAfterViewInit(): void {
        if (!this.email && !this.phoneNumbers && !this.address) this.elementRef.nativeElement.style.padding = "0px";
    }
}
