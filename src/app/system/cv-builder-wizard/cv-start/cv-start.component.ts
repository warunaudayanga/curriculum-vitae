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
                const json = JSON.parse(jsonString as string) as CVData;
                if (json.importValidation !== "4274") {
                    this.alertMessage = "This is not a valid CV JSON file.";
                    this.alertModal?.show();
                }
                const cvData = {
                    header: {
                        name: json.header?.name ?? Globals.DEFAULTS.header.name,
                        title: json.header?.title ?? Globals.DEFAULTS.header.title,
                        includeImage: json.header?.includeImage ?? Globals.DEFAULTS.header.includeImage,
                        image: json.header?.image ?? Globals.DEFAULTS.header.image,
                    },
                    contacts: {
                        email: json.contacts?.email ?? Globals.DEFAULTS.contacts.email,
                        phoneNumbers: json.contacts?.phoneNumbers ?? Globals.DEFAULTS.contacts.phoneNumbers,
                        address: json.contacts?.address ?? Globals.DEFAULTS.contacts.address,
                    },
                    theme: {
                        name: json.theme?.name ?? Globals.DEFAULTS.theme.name,
                        primaryColor: json.theme?.primaryColor ?? Globals.DEFAULTS.theme.primaryColor,
                        secondaryColor: json.theme?.secondaryColor ?? Globals.DEFAULTS.theme.secondaryColor,
                        accentColor: json.theme?.accentColor ?? Globals.DEFAULTS.theme.accentColor,
                        textColor: json.theme?.textColor ?? Globals.DEFAULTS.theme.textColor,
                        separatorColor: json.theme?.separatorColor ?? Globals.DEFAULTS.theme.separatorColor,
                        mainLinkColor: json.theme?.mainLinkColor ?? Globals.DEFAULTS.theme.mainLinkColor,
                        backgroundColor: json.theme?.backgroundColor ?? Globals.DEFAULTS.theme.backgroundColor,
                    },
                    configs: {
                        dynamics: Globals.DEFAULTS.configs.dynamics,
                        mainContentPadding:
                            json.configs?.mainContentPadding ?? Globals.DEFAULTS.configs.mainContentPadding,
                        mainContentPaddingMin:
                            json.configs?.mainContentPaddingMin ?? Globals.DEFAULTS.configs.mainContentPaddingMin,
                        mainContentPaddingMax:
                            json.configs?.mainContentPaddingMax ?? Globals.DEFAULTS.configs.mainContentPaddingMax,
                        sidebarPadding: json.configs?.sidebarPadding ?? Globals.DEFAULTS.configs.sidebarPadding,
                        sidebarPaddingMin:
                            json.configs?.sidebarPaddingMin ?? Globals.DEFAULTS.configs.sidebarPaddingMin,
                        sidebarPaddingMax:
                            json.configs?.sidebarPaddingMax ?? Globals.DEFAULTS.configs.sidebarPaddingMax,
                        sidebarSpace: json.configs?.sidebarSpace ?? Globals.DEFAULTS.configs.sidebarSpace,
                        sidebarSpaceMin: json.configs?.sidebarSpaceMin ?? Globals.DEFAULTS.configs.sidebarSpaceMin,
                        sidebarSpaceMax: json.configs?.sidebarSpaceMax ?? Globals.DEFAULTS.configs.sidebarSpaceMax,
                        headerNameFontSize:
                            json.configs?.headerNameFontSize ?? Globals.DEFAULTS.configs.headerNameFontSize,
                        headerNameFontSizeMin:
                            json.configs?.headerNameFontSizeMin ?? Globals.DEFAULTS.configs.headerNameFontSizeMin,
                        headerNameFontSizeMax:
                            json.configs?.headerNameFontSizeMax ?? Globals.DEFAULTS.configs.headerNameFontSizeMax,
                        headerNameLineHeight: Globals.DEFAULTS.configs.headerNameLineHeight,
                        headerNameLineHeightMin: Globals.DEFAULTS.configs.headerNameLineHeightMin,
                        headerNameLineHeightMax: Globals.DEFAULTS.configs.headerNameLineHeightMax,
                        headerTitleFontSize:
                            json.configs?.headerTitleFontSize ?? Globals.DEFAULTS.configs.headerTitleFontSize,
                        headerTitleFontSizeMin:
                            json.configs?.headerTitleFontSizeMin ?? Globals.DEFAULTS.configs.headerTitleFontSizeMin,
                        headerTitleFontSizeMax:
                            json.configs?.headerTitleFontSizeMax ?? Globals.DEFAULTS.configs.headerTitleFontSizeMax,
                        headerTitleLineHeight: Globals.DEFAULTS.configs.headerTitleLineHeight,
                        headerTitleLineHeightMin: Globals.DEFAULTS.configs.headerTitleLineHeightMin,
                        headerTitleLineHeightMax: Globals.DEFAULTS.configs.headerTitleLineHeightMax,
                        imageWidth: json.configs?.imageWidth ?? Globals.DEFAULTS.configs.imageWidth,
                        imageWidthMin: json.configs?.imageWidthMin ?? Globals.DEFAULTS.configs.imageWidthMin,
                        imageWidthMax: json.configs?.imageWidthMax ?? Globals.DEFAULTS.configs.imageWidthMax,
                        imageHeight: json.configs?.imageHeight ?? Globals.DEFAULTS.configs.imageHeight,
                        imageHeightMin: json.configs?.imageHeightMin ?? Globals.DEFAULTS.configs.imageHeightMin,
                        imageHeightMax: json.configs?.imageHeightMax ?? Globals.DEFAULTS.configs.imageHeightMax,
                        contactsFontSize: json.configs?.contactsFontSize ?? Globals.DEFAULTS.configs.contactsFontSize,
                        contactsFontSizeMin:
                            json.configs?.contactsFontSizeMin ?? Globals.DEFAULTS.configs.contactsFontSizeMin,
                        contactsFontSizeMax:
                            json.configs?.contactsFontSizeMax ?? Globals.DEFAULTS.configs.contactsFontSizeMax,
                        contactsIconSize: json.configs?.contactsIconSize ?? Globals.DEFAULTS.configs.contactsIconSize,
                        contactsIconSizeMin:
                            json.configs?.contactsIconSizeMin ?? Globals.DEFAULTS.configs.contactsIconSizeMin,
                        contactsIconSizeMax:
                            json.configs?.contactsIconSizeMax ?? Globals.DEFAULTS.configs.contactsIconSizeMax,
                        contactsSpace: json.configs?.contactsSpace ?? Globals.DEFAULTS.configs.contactsSpace,
                        contactsSpaceMin: json.configs?.contactsSpaceMin ?? Globals.DEFAULTS.configs.contactsSpaceMin,
                        contactsSpaceMax: json.configs?.contactsSpaceMax ?? Globals.DEFAULTS.configs.contactsSpaceMax,
                        contactsListSpace:
                            json.configs?.contactsListSpace ?? Globals.DEFAULTS.configs.contactsListSpace,
                        contactsListSpaceMin:
                            json.configs?.contactsListSpaceMin ?? Globals.DEFAULTS.configs.contactsListSpaceMin,
                        contactsListSpaceMax:
                            json.configs?.contactsListSpaceMax ?? Globals.DEFAULTS.configs.contactsListSpaceMax,
                        sectionTitleFontSize:
                            json.configs?.sectionTitleFontSize ?? Globals.DEFAULTS.configs.sectionTitleFontSize,
                        sectionTitleFontSizeMin:
                            json.configs?.sectionTitleFontSizeMin ?? Globals.DEFAULTS.configs.sectionTitleFontSizeMin,
                        sectionTitleFontSizeMax:
                            json.configs?.sectionTitleFontSizeMax ?? Globals.DEFAULTS.configs.sectionTitleFontSizeMax,
                        sectionTextFontSize:
                            json.configs?.sectionTextFontSize ?? Globals.DEFAULTS.configs.sectionTextFontSize,
                        sectionTextFontSizeMin:
                            json.configs?.sectionTextFontSizeMin ?? Globals.DEFAULTS.configs.sectionTextFontSizeMin,
                        sectionTextFontSizeMax:
                            json.configs?.sectionTextFontSizeMax ?? Globals.DEFAULTS.configs.sectionTextFontSizeMax,
                        sectionSubTextFontSize:
                            json.configs?.sectionSubTextFontSize ?? Globals.DEFAULTS.configs.sectionSubTextFontSize,
                        sectionSubTextFontSizeMin:
                            json.configs?.sectionSubTextFontSizeMin ??
                            Globals.DEFAULTS.configs.sectionSubTextFontSizeMin,
                        sectionSubTextFontSizeMax:
                            json.configs?.sectionSubTextFontSizeMax ??
                            Globals.DEFAULTS.configs.sectionSubTextFontSizeMax,
                        sectionTextLineHeight:
                            json.configs?.sectionTextLineHeight ?? Globals.DEFAULTS.configs.sectionTextLineHeight,
                        sectionTextLineHeightMin:
                            json.configs?.sectionTextLineHeightMin ?? Globals.DEFAULTS.configs.sectionTextLineHeightMin,
                        sectionTextLineHeightMax:
                            json.configs?.sectionTextLineHeightMax ?? Globals.DEFAULTS.configs.sectionTextLineHeightMax,
                        sectionSpace: json.configs?.sectionSpace ?? Globals.DEFAULTS.configs.sectionSpace,
                        sectionSpaceMin: json.configs?.sectionSpaceMin ?? Globals.DEFAULTS.configs.sectionSpaceMin,
                        sectionSpaceMax: json.configs?.sectionSpaceMax ?? Globals.DEFAULTS.configs.sectionSpaceMax,
                        sectionItemSpace: json.configs?.sectionItemSpace ?? Globals.DEFAULTS.configs.sectionItemSpace,
                        sectionItemSpaceMin:
                            json.configs?.sectionItemSpaceMin ?? Globals.DEFAULTS.configs.sectionItemSpaceMin,
                        sectionItemSpaceMax:
                            json.configs?.sectionItemSpaceMax ?? Globals.DEFAULTS.configs.sectionItemSpaceMax,
                        sectionSeparatorSpace:
                            json.configs?.sectionSeparatorSpace ?? Globals.DEFAULTS.configs.sectionSeparatorSpace,
                        sectionSeparatorSpaceMin:
                            json.configs?.sectionSeparatorSpaceMin ?? Globals.DEFAULTS.configs.sectionSeparatorSpaceMin,
                        sectionSeparatorSpaceMax:
                            json.configs?.sectionSeparatorSpaceMax ?? Globals.DEFAULTS.configs.sectionSeparatorSpaceMax,
                        sectionListItemSpace:
                            json.configs?.sectionListItemSpace ?? Globals.DEFAULTS.configs.sectionListItemSpace,
                        sectionListItemSpaceMin:
                            json.configs?.sectionListItemSpaceMin ?? Globals.DEFAULTS.configs.sectionListItemSpaceMin,
                        sectionListItemSpaceMax:
                            json.configs?.sectionListItemSpaceMax ?? Globals.DEFAULTS.configs.sectionListItemSpaceMax,
                    },
                    sections: json.sections ?? Globals.DEFAULTS.sections.sections,
                    sidebar: json.sidebar ?? Globals.DEFAULTS.sidebar.sections,
                };
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
