import { Component } from "@angular/core";
import { CVData } from "../../core/interfaces/section.interfaces";
import { Store } from "@ngxs/store";

// noinspection JSPotentiallyInvalidConstructorUsage
@Component({
    selector: "app-cv-printer",
    templateUrl: "./cv-printer.component.html",
    styleUrls: ["./cv-printer.component.scss"],
})
export class CVPrinterComponent {
    cvData?: CVData;

    constructor(private store: Store) {
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
}
