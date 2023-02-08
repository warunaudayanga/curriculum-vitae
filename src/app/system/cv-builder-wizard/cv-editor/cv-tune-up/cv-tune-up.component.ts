import { Component } from "@angular/core";
import { CVData } from "../../../../core/interfaces/section.interfaces";
import { Store } from "@ngxs/store";
import { HeaderStateModel } from "../../../../core/state/header";
import { ContactsStateModel } from "../../../../core/state/contacts/contacts.model";
import { SectionsStateModel } from "../../../../core/state/sections";
import { SidebarStateModel } from "../../../../core/state/sidebar";

@Component({
    selector: "app-cv-tune-up",
    templateUrl: "./cv-tune-up.component.html",
    styleUrls: ["./cv-tune-up.component.scss"],
})
export class CvTuneUpComponent {
    cvData?: CVData;

    constructor(private store: Store) {
        const header = this.store.selectSnapshot(state => state.header) as HeaderStateModel;
        const contacts = this.store.selectSnapshot(state => state.contacts) as ContactsStateModel;
        const sections = this.store.selectSnapshot(state => state.sections) as SectionsStateModel;
        const sidebar = this.store.selectSnapshot(state => state.sidebar) as SidebarStateModel;
        this.cvData = { header, contacts, sections: sections.sections, sidebar: sidebar.sections };
    }
}
