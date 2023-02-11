import { AfterViewInit, Component } from "@angular/core";
import { CVData } from "../../../../core/interfaces/system.interfaces";
import { Store } from "@ngxs/store";
import { Modal } from "bootstrap";

let tipsShown: boolean = false;

@Component({
    selector: "app-cv-tune-up",
    templateUrl: "./cv-tune-up.component.html",
    styleUrls: ["./cv-tune-up.component.scss"],
})
export class CVTuneUpComponent implements AfterViewInit {
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

    ngAfterViewInit(): void {
        if (!tipsShown) {
            const tipModel = new Modal("#tuneUpTipModel");
            tipModel.show();
            tipsShown = true;
        }
    }

    reload(reload: boolean): void {
        this.reloading = reload;
    }
}
