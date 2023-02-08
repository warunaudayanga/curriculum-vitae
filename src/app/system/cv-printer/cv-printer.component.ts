import { Component } from "@angular/core";
import { CVData } from "../../core/interfaces/section.interfaces";
import { Store } from "@ngxs/store";
import { Router } from "@angular/router";

// noinspection JSPotentiallyInvalidConstructorUsage
@Component({
    selector: "app-cv-printer",
    templateUrl: "./cv-printer.component.html",
    styleUrls: ["./cv-printer.component.scss"],
})
export class CVPrinterComponent {
    cvData?: CVData;

    constructor(private store: Store, private router: Router) {
        this.cvData = {
            header: this.store.selectSnapshot(state => state.header),
            contacts: this.store.selectSnapshot(state => state.contacts),
            sections: this.store.selectSnapshot(state => state.sections.sections),
            sidebar: this.store.selectSnapshot(state => state.sidebar.sections),
        };
    }

    print(): void {
        window.print();
    }

    async back(): Promise<void> {
        await this.router.navigate(["/6"], { skipLocationChange: true });
    }
}
