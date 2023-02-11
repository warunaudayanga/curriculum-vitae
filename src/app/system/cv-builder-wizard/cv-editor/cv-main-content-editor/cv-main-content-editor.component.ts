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
                id: "dd2d449c-d4c6-4d8f-985b-bad1785bd85d",
                title: "PROFILE",
                type: SectionType.PARAGRAPH,
                paragraph:
                    "Seeking a challenging position to obtain the knowledge and experiences, while contributing to " +
                    "the organization’s vision, mission and giving my best effort and skills to achieve organizational goals.",
            },
            {
                id: "7c95c307-0172-47d8-aeac-2eb87a6381cd",
                title: "WORK EXPERIENCE",
                type: SectionType.LIST,
                list: [{ id: "d577afb7-3d5a-407e-abb8-22318c4cee16", title: "" }],
            },
            {
                id: "9020640c-621a-458d-802e-b05c6d09e6ce",
                title: "PROFESSIONAL QUALIFICATIONS",
                type: SectionType.LIST,
                list: [{ id: "2647cac9-68a7-4405-b6b3-1fadd2107249", title: "" }],
            },
            {
                id: "06a10c60-5003-47dc-abe3-5506d91217aa",
                title: "EDUCATIONAL QUALIFICATIONS",
                type: SectionType.LIST,
                list: [{ id: "b504aa77-d467-4b9e-a0e3-33d38a6ce852", title: "" }],
            },
            {
                id: "4568ce75-6a9f-4833-a9a1-f7ca4f8e25d7",
                title: "LEADERSHIP AND TEAMWORK SKILLS",
                type: SectionType.LIST,
                list: [{ id: "4a3dda23-e169-491a-980b-121f160c8e22", title: "" }],
            },
            {
                id: "f6afd3d4-db2d-4786-b443-47c1b769ed19",
                title: "EXTRA CURRICULAR ACTIVITIES",
                type: SectionType.LIST,
                list: [{ id: "5c8daf71-41aa-4eff-be98-2cbc8873a702", title: "" }],
            },
            {
                id: "2bc698b6-47e6-4cc9-bbf7-e5f0bd1d8ef5",
                title: "NON RELATED REFEREES",
                type: SectionType.COLUMNS,
                columns: [{ lines: [""] }, { lines: [""] }],
            },
            {
                id: "78bcfa7c-ca16-4ab7-974e-04c99801f5f2",
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
