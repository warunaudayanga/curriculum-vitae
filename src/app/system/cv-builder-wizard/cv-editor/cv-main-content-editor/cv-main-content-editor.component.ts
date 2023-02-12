import { AfterViewInit, Component } from "@angular/core";
import { Section } from "../../../../core/interfaces/system.interfaces";
import { Store } from "@ngxs/store";
import { Sections } from "../../../../core/state/sections";
import { SectionType } from "../../../../core/enums/section-type.enum";
import PatchSections = Sections.PatchSections;
import { ConfigsStateModel } from "../../../../core/state/configs";
import { Modal } from "bootstrap";
import { Settings, SettingsStateModel } from "../../../../core/state/settings";
import PatchSettings = Settings.PatchSettings;
import { ThemeStateModel } from "../../../../core/state/theme";
import { v4 as uuid } from "uuid";

@Component({
    selector: "app-cv-main-content-editor",
    templateUrl: "./cv-main-content-editor.component.html",
    styleUrls: ["./cv-main-content-editor.component.scss"],
})
export class CVMainContentEditorComponent implements AfterViewInit {
    sections: Section[] = [];

    preDefinedSections?: Section[];

    configs: ConfigsStateModel;

    theme?: ThemeStateModel;

    settings?: SettingsStateModel;

    tipModel?: Modal;

    constructor(private store: Store) {
        this.sections = this.store.selectSnapshot(state => state.sections.sections);
        this.configs = this.store.selectSnapshot(state => state.configs);
        this.theme = this.store.selectSnapshot(state => state.theme);
        this.settings = this.store.selectSnapshot(state => state.settings);
        this.preDefinedSections = [
            {
                id: uuid(),
                title: "PROFILE",
                type: SectionType.PARAGRAPH,
                paragraph:
                    "Seeking a challenging position to obtain the knowledge and experiences, while contributing to " +
                    "the organization’s vision, mission and giving my best effort and skills to achieve organizational goals.",
            },
            {
                id: uuid(),
                title: "WORK EXPERIENCE",
                type: SectionType.LIST,
                list: [{ id: "d577afb7-3d5a-407e-abb8-22318c4cee16", title: "" }],
            },
            {
                id: uuid(),
                title: "PROFESSIONAL QUALIFICATIONS",
                type: SectionType.LIST,
                list: [{ id: "2647cac9-68a7-4405-b6b3-1fadd2107249", title: "" }],
            },
            {
                id: uuid(),
                title: "EDUCATIONAL QUALIFICATIONS",
                type: SectionType.LIST,
                list: [{ id: "b504aa77-d467-4b9e-a0e3-33d38a6ce852", title: "" }],
            },
            {
                id: uuid(),
                title: "LEADERSHIP AND TEAMWORK SKILLS",
                type: SectionType.LIST,
                list: [{ id: "4a3dda23-e169-491a-980b-121f160c8e22", title: "" }],
            },
            {
                id: uuid(),
                title: "EXTRA CURRICULAR ACTIVITIES",
                type: SectionType.LIST,
                list: [{ id: "5c8daf71-41aa-4eff-be98-2cbc8873a702", title: "" }],
            },
            {
                id: uuid(),
                title: "NON RELATED REFEREES",
                type: SectionType.COLUMNS,
                columns: [{ lines: [""] }, { lines: [""] }],
            },
            {
                id: uuid(),
                title: "CERTIFICATION",
                type: SectionType.PARAGRAPH,
                paragraph:
                    "I certify that, the above mentioned particulars furnished by me are true and accurate and if I’m " +
                    "selected, I promise to perform my duties efficiently, loyalty and obediently to your entire satisfaction",
            },
        ];
    }

    ngAfterViewInit(): void {
        this.tipModel = new Modal("#mainContentTipModel");
        if (!this.settings?.mainTipShown) {
            this.tipModel?.show();
            this.store.dispatch(new PatchSettings({ mainTipShown: true }));
        }
    }

    onSectionsChange(): void {
        this.store.dispatch(new PatchSections({ sections: this.sections }));
    }

    showTips(): void {
        this.tipModel?.show();
    }
}
