import { Component, ElementRef, Input, QueryList, ViewChildren } from "@angular/core";
import { CVData, CVPage, Section } from "../../../core/interfaces/system.interfaces";
import { Globals } from "../../configs/globals";

@Component({
    selector: "app-cv-viewer",
    templateUrl: "./cv-viewer.component.html",
    styleUrls: ["./cv-viewer.component.scss"],
})
export class CVViewerComponent {
    @ViewChildren("page") pages!: QueryList<ElementRef<HTMLDivElement>>;

    @Input() cvData?: CVData;

    page2?: CVPage;

    page3?: CVPage;

    page4?: CVPage;

    DEFAULTS = Globals.DEFAULTS;

    onPage1MainForward(sections: Section[]): void {
        if (this.page2) {
            this.page2.sections = sections;
        } else {
            this.page2 = {
                sections,
                configs: this.cvData!.configs,
                theme: this.cvData!.theme,
            };
        }
    }

    onPage2MainForward(sections: Section[]): void {
        if (this.page3) {
            this.page3.sections = sections;
        } else {
            this.page3 = {
                sections,
                configs: this.cvData!.configs,
                theme: this.cvData!.theme,
            };
        }
    }

    onPage3MainForward(sections: Section[]): void {
        if (this.page4) {
            this.page4.sections = sections;
        } else {
            this.page4 = {
                sections,
                configs: this.cvData!.configs,
                theme: this.cvData!.theme,
            };
        }
    }

    // noinspection JSUnusedLocalSymbols
    onPage4MainForward(sections: Section[]): void {
        // eslint-disable-next-line no-console
    }

    onPage1SidebarForward(sidebar: Section[]): void {
        if (this.page2) {
            this.page2.sidebar = sidebar;
        } else {
            this.page2 = {
                sidebar,
                configs: this.cvData!.configs,
                theme: this.cvData!.theme,
            };
        }
    }

    onPage2SidebarForward(sidebar: Section[]): void {
        if (this.page3) {
            this.page3.sidebar = sidebar;
        } else {
            this.page3 = {
                sidebar,
                configs: this.cvData!.configs,
                theme: this.cvData!.theme,
            };
        }
    }

    onPage3SidebarForward(sidebar: Section[]): void {
        if (this.page4) {
            this.page4.sidebar = sidebar;
        } else {
            this.page4 = {
                sidebar,
                configs: this.cvData!.configs,
                theme: this.cvData!.theme,
            };
        }
    }

    // noinspection JSUnusedLocalSymbols
    onPage4SidebarForward(sections: Section[]): void {
        // eslint-disable-next-line no-console
    }
}
