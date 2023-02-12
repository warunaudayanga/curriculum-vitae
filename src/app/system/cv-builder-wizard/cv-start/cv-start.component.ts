import { AfterViewInit, Component, ElementRef, EventEmitter, Output } from "@angular/core";
import { Store } from "@ngxs/store";
import { CVData } from "../../../core/interfaces/system.interfaces";
import { Header } from "../../../core/state/header";
import SetHeader = Header.SetHeader;
import { Contacts } from "../../../core/state/contacts";
import SetContacts = Contacts.SetContacts;
import { Config } from "../../../core/state/configs";
import SetConfigs = Config.SetConfigs;
import { Sidebar } from "../../../core/state/sidebar";
import SetSidebar = Sidebar.SetSidebar;
import { Sections } from "../../../core/state/sections";
import SetSections = Sections.SetSections;
import { Modal } from "bootstrap";
import { AppService } from "../../../app.service";
import { Globals } from "../../configs/globals";
import { Settings, SettingsStateModel } from "../../../core/state/settings";
import PatchSettings = Settings.PatchSettings;
import { Theme } from "../../../core/state/theme";
import SetTheme = Theme.SetTheme;
import { hexToHsl, hslLighten, hslString } from "../../../core/utils/color.utils";

@Component({
    selector: "app-cv-start",
    templateUrl: "./cv-start.component.html",
    styleUrls: ["./cv-start.component.scss"],
})
export class CVStartComponent implements AfterViewInit {
    @Output() onImport: EventEmitter<number> = new EventEmitter<number>();

    start: boolean = true;

    startModal?: Modal;

    alertModal?: Modal;

    alertMessage?: string;

    settings?: SettingsStateModel;

    constructor(private store: Store, private app: AppService, private elementRef: ElementRef) {
        this.settings = this.store.selectSnapshot(state => state.settings);
    }

    ngAfterViewInit(): void {
        this.startModal = new Modal("#startModal");
        this.alertModal = new Modal("#startAlertModal");
    }

    restore(cvData: CVData): void {
        if (cvData.header) this.store.dispatch(new SetHeader(cvData.header));
        if (cvData.contacts) this.store.dispatch(new SetContacts(cvData.contacts));
        if (cvData.configs) this.store.dispatch(new SetConfigs(cvData.configs));
        if (cvData.sections) this.store.dispatch(new SetSections({ sections: cvData.sections }));
        if (cvData.sidebar) this.store.dispatch(new SetSidebar({ sections: cvData.sidebar }));
        this.store.dispatch(new PatchSettings({ hasChanged: true }));

        if (cvData.theme) {
            if (cvData.theme) this.store.dispatch(new SetTheme(cvData.theme));
            const root = this.elementRef.nativeElement.closest(":root") as HTMLElement;
            root.style.setProperty("--app-primary-color", cvData.theme.primaryColor);
            root.style.setProperty(
                "--app-primary-color-hover",
                hslString(hslLighten(hexToHsl(cvData.theme.primaryColor), 10)),
            );
            root.style.setProperty("--app-secondary-color", cvData.theme.secondaryColor);
            root.style.setProperty("--app-accent-color", cvData.theme.accentColor);
            root.style.setProperty("--app-text-color", cvData.theme.textColor);
            root.style.setProperty("--app-separator-color", cvData.theme.separatorColor);
            root.style.setProperty("--app-main-link-color", cvData.theme.mainLinkColor);
            root.style.setProperty("--app-background-color", cvData.theme.backgroundColor);
        }
    }

    async onFileSelected(e: Event): Promise<void> {
        const jsonFile = (e.target as HTMLInputElement).files?.[0];
        if (jsonFile?.type.match(/application\/json/)) {
            const jsonString = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (event: any): void => {
                    resolve(event.target.result);
                };
                reader.onerror = (error): void => {
                    reject(error);
                };
                reader.readAsText(jsonFile);
            });
            try {
                const cvData = JSON.parse(jsonString as string) as CVData;
                if (cvData.importValidation !== "4274") {
                    this.alertMessage = "This is not a valid CV JSON file.";
                    this.alertModal?.show();
                }
                this.restore(cvData);
                this.onImport.emit(2);
            } catch (e) {
                this.alertMessage = "This is not a valid CV JSON file.";
                this.alertModal?.show();
            }
        } else {
            this.alertMessage = "Please select a JSON file.";
            this.alertModal?.show();
        }
    }

    showStartModal(): void {
        this.start = true;
        this.startModal?.show();
    }

    showImportModal(): void {
        this.start = false;
        this.startModal?.show();
    }

    continue(): void {
        this.onImport.emit(2);
    }

    create(): void {
        this.startModal?.hide();
        this.restore({
            theme: Globals.DEFAULTS.theme,
            header: Globals.DEFAULTS.header,
            contacts: Globals.DEFAULTS.contacts,
            configs: Globals.DEFAULTS.configs,
            sections: Globals.DEFAULTS.sections.sections,
            sidebar: Globals.DEFAULTS.sidebar.sections,
        });
        this.onImport.emit(1);
    }

    import(input: HTMLInputElement): void {
        this.startModal?.hide();
        input.click();
    }

    export(): void {
        this.app.export();
    }
}
