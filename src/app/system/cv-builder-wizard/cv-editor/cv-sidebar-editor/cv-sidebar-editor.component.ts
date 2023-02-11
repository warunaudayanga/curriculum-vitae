import { AfterViewInit, Component } from "@angular/core";
import { Section } from "../../../../core/interfaces/system.interfaces";
import { Store } from "@ngxs/store";
import { Sidebar } from "../../../../core/state/sidebar";
import PatchSidebar = Sidebar.PatchSidebar;
import { SectionType } from "../../../../core/enums/section-type.enum";
import { ConfigsStateModel } from "../../../../core/state/configs";
import { Modal } from "bootstrap";

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
                id: "fb3918fb-05ff-47e3-b20e-d0e186581d44",
                title: "PERSONAL DETAILS",
                type: SectionType.NAME_VALUE_LIST,
                keyValueList: [
                    { id: "32d8babb-5814-4acc-89dc-baeac95b2d8b", title: "Name", value: "" },
                    { id: "271e8204-5d8e-45ea-bea6-c765f3ae09c4", title: "Birthday", value: "" },
                    { id: "e5482a7d-a103-4a28-8469-ef6f5c0f1f54", title: "Gender", value: "" },
                    { id: "9143a9b8-6e8d-4a35-b9e5-12648f3ad5de", title: "Nationality", value: "" },
                    { id: "9b52193a-0dc5-4704-840c-524cb222c2dd", title: "Civil Status", value: "" },
                    { id: "b221ff23-67d3-4fd7-be22-57f376bfeae6", title: "School", value: "" },
                ],
            },
            {
                id: "ebc8675f-101f-434c-906d-6f3dc44e4c97",
                title: "JOB OBJECTIVE & CAREER GOALS",
                type: SectionType.PARAGRAPH,
                paragraph: "",
            },
            {
                id: "f873ab91-a316-4f99-be6d-42f5a678d7e2",
                title: "ABOUT",
                type: SectionType.PARAGRAPH,
                paragraph: "",
            },
            {
                id: "cb1f4950-11a4-4d45-b791-ff3b602a68f2",
                title: "SKILLS",
                type: SectionType.LIST,
                list: [{ id: "31e36f14-a5fb-44ab-986e-e4c7848dc342", title: "" }],
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
