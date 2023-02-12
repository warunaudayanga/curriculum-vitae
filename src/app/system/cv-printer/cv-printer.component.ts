import { AfterViewInit, Component } from "@angular/core";
import { CVData } from "../../core/interfaces/system.interfaces";
import { Store } from "@ngxs/store";
import { Router } from "@angular/router";
import { Modal } from "bootstrap";
import { Settings, SettingsStateModel } from "../../core/state/settings";
import PatchSettings = Settings.PatchSettings;
import { AppService } from "../../app.service";

@Component({
    selector: "app-cv-printer",
    templateUrl: "./cv-printer.component.html",
    styleUrls: ["./cv-printer.component.scss"],
})
export class CVPrinterComponent implements AfterViewInit {
    cvData?: CVData;

    settings?: SettingsStateModel;

    warningModel?: Modal;

    constructor(private store: Store, private router: Router, private app: AppService) {
        this.cvData = {
            header: this.store.selectSnapshot(state => state.header),
            contacts: this.store.selectSnapshot(state => state.contacts),
            configs: this.store.selectSnapshot(state => state.configs),
            sections: this.store.selectSnapshot(state => state.sections.sections),
            sidebar: this.store.selectSnapshot(state => state.sidebar.sections),
        };
        this.settings = this.store.selectSnapshot(state => state.settings);
    }

    ngAfterViewInit(): void {
        this.warningModel = new Modal("#printWarningModel");
        if (!this.settings?.printTipShown) {
            const tipModel = new Modal("#printTipModel");
            tipModel.show();
            this.store.dispatch(new PatchSettings({ printTipShown: true }));
        }
    }

    printWarning(): void {
        this.warningModel?.show();
    }

    print(): void {
        this.warningModel?.hide();
        setTimeout(() => {
            window.print();
        }, 500);
    }

    async back(): Promise<void> {
        await this.router.navigate(["/6"], { skipLocationChange: true });
    }

    export(): void {
        this.app.export();
    }
}
