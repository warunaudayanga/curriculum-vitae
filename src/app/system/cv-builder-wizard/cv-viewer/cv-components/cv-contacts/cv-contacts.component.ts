import { AfterViewInit, Component, ElementRef, Input } from "@angular/core";
import { ContactsStateModel } from "../../../../../core/state/contacts";

@Component({
    selector: "app-cv-contacts",
    templateUrl: "./cv-contacts.component.html",
    styleUrls: ["./cv-contacts.component.scss"],
})
export class CVContactsComponent implements AfterViewInit {
    @Input() contacts?: ContactsStateModel;

    @Input() fontSize: number = 15;

    @Input() iconSize: number = 16;

    @Input() editable: boolean = false;

    @Input() space: number = 0;

    constructor(private elementRef: ElementRef) {}

    ngAfterViewInit(): void {
        if (
            !this.editable &&
            !this.contacts?.email &&
            !this?.contacts?.phoneNumbers?.length &&
            !this?.contacts?.address
        )
            this.elementRef.nativeElement.style.paddingTop = "0px";
    }

    getLinkedInId(): string {
        return this.contacts?.linkedIn?.split("linkedin.com/in/")?.[1]?.split(/\/[\W\w]*/)?.[0] ?? "";
    }

    getGitHubId(): string {
        return this.contacts?.gitHub?.split("github.com/")?.[1]?.split(/\/[\W\w]*/)?.[0] ?? "";
    }

    getFacebookId(): string {
        return this.contacts?.facebook?.split("facebook.com/")?.[1]?.split(/\/[\W\w]*/)?.[0] ?? "";
    }

    getUrlId(): string {
        return this.contacts?.url?.split(/https:\/\/|http:\/\//)?.[1]?.replace(/\/$/, "") ?? "";
    }
}
