import { AfterViewInit, Component } from "@angular/core";
import { Section } from "../../../../core/interfaces/system.interfaces";
import { Store } from "@ngxs/store";
import { Sidebar } from "../../../../core/state/sidebar";
import PatchSidebar = Sidebar.PatchSidebar;
import { SectionType } from "../../../../core/enums/section-type.enum";
import { ConfigsStateModel } from "../../../../core/state/configs";
import { Modal } from "bootstrap";
import { v4 as uuid } from "uuid";

@Component({
    selector: "app-cv-sidebar-editor",
    templateUrl: "./cv-sidebar-editor.component.html",
    styleUrls: ["./cv-sidebar-editor.component.scss"],
})
export class CVSidebarEditorComponent implements AfterViewInit {
    sections: Section[] = [];

    preDefinedSections?: Section[];

    configs: ConfigsStateModel;

    tipModel?: Modal;

    constructor(private store: Store) {
        this.sections = this.store.selectSnapshot(state => state.sidebar.sections);
        this.configs = this.store.selectSnapshot(state => state.configs);
        this.preDefinedSections = [
            {
                id: uuid(),
                title: "PERSONAL DETAILS",
                type: SectionType.NAME_VALUE_LIST,
                keyValueList: [
                    { id: uuid(), title: "Name", value: "" },
                    { id: uuid(), title: "Birthday", value: "" },
                    { id: uuid(), title: "Gender", value: "" },
                    { id: uuid(), title: "Nationality", value: "" },
                    { id: uuid(), title: "Civil Status", value: "" },
                    { id: uuid(), title: "School", value: "" },
                ],
            },
            {
                id: uuid(),
                title: "JOB OBJECTIVE & CAREER GOALS",
                type: SectionType.PARAGRAPH,
                paragraph: "",
            },
            {
                id: uuid(),
                title: "ABOUT",
                type: SectionType.PARAGRAPH,
                paragraph: "",
            },
            {
                id: uuid(),
                title: "SKILLS",
                type: SectionType.LIST,
                list: [{ id: uuid(), title: "" }],
            },
        ];
    }

    ngAfterViewInit(): void {
        this.tipModel = new Modal("#mainContentTipModel");
    }

    onSectionsChange(): void {
        this.store.dispatch(new PatchSidebar({ sections: this.sections }));
    }

    showTips(): void {
        this.tipModel?.show();
    }
}
