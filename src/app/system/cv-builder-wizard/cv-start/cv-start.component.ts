import { Component } from "@angular/core";
import { Store } from "@ngxs/store";
import { CVData } from "../../../core/interfaces/system.interfaces";
import { Header } from "../../../core/state/header";
import SetHeaderInfo = Header.SetHeader;
import { Contacts } from "../../../core/state/contacts";
import SetContacts = Contacts.SetContacts;
import { Config } from "../../../core/state/configs";
import SetConfigs = Config.SetConfigs;
import { Sidebar } from "../../../core/state/sidebar";
import SetSidebar = Sidebar.SetSidebar;
import { Sections } from "../../../core/state/sections";
import SetSections = Sections.SetSections;

@Component({
    selector: "app-cv-start",
    templateUrl: "./cv-start.component.html",
    styleUrls: ["./cv-start.component.scss"],
})
export class CvStartComponent {
    constructor(private store: Store) {}

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
                    // eslint-disable-next-line no-alert
                    alert("This is not a valid CV JSON file.");
                }
                if (cvData.header) this.store.dispatch(new SetHeaderInfo(cvData.header));
                if (cvData.contacts) this.store.dispatch(new SetContacts(cvData.contacts));
                if (cvData.configs) this.store.dispatch(new SetConfigs(cvData.configs));
                if (cvData.sections) this.store.dispatch(new SetSections({ sections: cvData.sections }));
                if (cvData.sidebar) this.store.dispatch(new SetSidebar({ sections: cvData.sidebar }));
            } catch (e) {
                // eslint-disable-next-line no-alert
                alert("This is not a valid CV JSON file.");
            }
        } else {
            // eslint-disable-next-line no-alert
            alert("Please select a valid JSON file.");
        }
    }
}
