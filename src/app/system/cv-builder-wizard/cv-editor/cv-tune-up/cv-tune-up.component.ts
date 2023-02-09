import { Component } from "@angular/core";
import { CVData } from "../../../../core/interfaces/system.interfaces";
import { Store } from "@ngxs/store";

@Component({
    selector: "app-cv-tune-up",
    templateUrl: "./cv-tune-up.component.html",
    styleUrls: ["./cv-tune-up.component.scss"],
})
export class CvTuneUpComponent {
    cvData?: CVData;

    reloading: boolean = false;

    constructor(private store: Store) {
        this.cvData = {
            header: this.store.selectSnapshot(state => state.header),
            contacts: this.store.selectSnapshot(state => state.contacts),
            configs: this.store.selectSnapshot(state => state.configs),
            sections: this.store.selectSnapshot(state => state.sections.sections),
            sidebar: this.store.selectSnapshot(state => state.sidebar.sections),
        };
    }

    reload(reload: boolean): void {
        this.reloading = reload;
    }
}
