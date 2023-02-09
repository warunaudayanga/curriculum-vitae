import { Component } from "@angular/core";
import { Section } from "../../../../core/interfaces/system.interfaces";
import { Store } from "@ngxs/store";
import { Sidebar } from "../../../../core/state/sidebar";
import PatchSidebar = Sidebar.PatchSidebar;
import { SectionType } from "../../../../core/enums/section-type.enum";
import { ConfigsStateModel } from "../../../../core/state/configs";

@Component({
    selector: "app-cv-sidebar-editor",
    templateUrl: "./cv-sidebar-editor.component.html",
    styleUrls: ["./cv-sidebar-editor.component.scss"],
})
export class CvSidebarEditorComponent {
    sections: Section[] = [];

    preDefinedSections?: Section[];

    configs: ConfigsStateModel;

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
                paragraph:
                    "I would like to devote my carrier in the Telecommunication Industry. While " +
                    "enhancing technical skills through experiences and develop interpersonal " +
                    "skills through solving problems in to improve communication skills through " +
                    "the team work experiences. This would be a great opportunity to give my " +
                    "valuable contribution to where I am working. While achieving my personal " +
                    "goals through the hard work and experience gathered.",
            },
            {
                id: "cb1f4950-11a4-4d45-b791-ff3b602a68f2",
                title: "OTHER SKILLS",
                type: SectionType.LIST,
                list: [{ id: "31e36f14-a5fb-44ab-986e-e4c7848dc342", title: "" }],
            },
            {
                id: "25283866-d262-4aeb-817e-add6d54cac40",
                title: "PROGRAMING AND IT SKILLS",
                type: SectionType.LIST_WITH_PARAGRAPH,
                listWithParagraph: {
                    title:
                        "Studied about several programing languages, technologies, frameworks and " +
                        "well improved through projects for the &lt;institute name&gt;",
                    list: [{ id: "c91011c5-6e2b-449d-8509-be24dd09975f", title: "" }],
                },
            },
        ];
    }

    onSectionsChange(): void {
        this.store.dispatch(new PatchSidebar({ sections: this.sections }));
    }
}
