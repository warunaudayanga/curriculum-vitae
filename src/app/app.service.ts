import { Injectable } from "@angular/core";
import { Store } from "@ngxs/store";
import { CVData } from "./core/interfaces/system.interfaces";

@Injectable({
    providedIn: "root",
})
export class AppService {
    constructor(private store: Store) {}

    export(): void {
        const cvData: CVData = {
            theme: this.store.selectSnapshot(state => state.theme),
            header: this.store.selectSnapshot(state => state.header),
            contacts: this.store.selectSnapshot(state => state.contacts),
            configs: this.store.selectSnapshot(state => state.configs),
            sections: this.store.selectSnapshot(state => state.sections.sections),
            sidebar: this.store.selectSnapshot(state => state.sidebar.sections),
        };
        cvData.importValidation = "4274";
        let sJson = JSON.stringify(cvData);
        let element = document.createElement("a");
        const name = (cvData?.header?.title.replace(/\W/g, "") ?? "").toLocaleLowerCase();
        const fileName = name ? `${name}-cv.json` : "cv.json";
        element.setAttribute("href", "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
        element.setAttribute("download", fileName);
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
}
