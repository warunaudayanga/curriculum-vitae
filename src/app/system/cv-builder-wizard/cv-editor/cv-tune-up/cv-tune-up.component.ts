import { Component, ElementRef, ViewChild } from "@angular/core";
import { CvViewerComponent } from "../../cv-viewer/cv-viewer.component";
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
    @ViewChild(CvViewerComponent, { read: ElementRef }) cv!: ElementRef<HTMLDivElement>;

    cvData?: CVData;

    constructor(private elementRef: ElementRef<HTMLDivElement>, private store: Store) {
        const header = this.store.selectSnapshot(state => state.header) as HeaderStateModel;
        const contacts = this.store.selectSnapshot(state => state.contacts) as ContactsStateModel;
        const sections = this.store.selectSnapshot(state => state.sections) as SectionsStateModel;
        const sidebar = this.store.selectSnapshot(state => state.sidebar) as SidebarStateModel;
        this.cvData = { header, contacts, sections: sections.sections, sidebar: sidebar.sections };
    }
}
