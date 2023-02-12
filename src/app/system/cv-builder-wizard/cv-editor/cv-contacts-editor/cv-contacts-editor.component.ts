import { Component } from "@angular/core";
import { HeaderStateModel } from "../../../../core/state/header";
import { Store } from "@ngxs/store";
import { ContactsStateModel, Contacts } from "../../../../core/state/contacts";
import PatchContacts = Contacts.PatchContacts;
import { Config, ConfigsStateModel } from "../../../../core/state/configs";
import PatchConfig = Config.PatchConfigs;
import { Globals } from "../../../configs/globals";
import { Limits } from "../../../../core/interfaces/system.interfaces";

type Changeable = "contactsFontSize" | "contactsIconSize";

@Component({
    selector: "app-cv-contacts-editor",
    templateUrl: "./cv-contacts-editor.component.html",
    styleUrls: ["./cv-contacts-editor.component.scss"],
})
export class CVContactsEditorComponent {
    header: HeaderStateModel;

    contacts: ContactsStateModel;

    configs: ConfigsStateModel;

    waitTimer?: NodeJS.Timer;

    repeatTimer?: NodeJS.Timer;

    limits: Limits<Changeable>;

    CONFIGS = Globals.DEFAULTS.configs;

    constructor(private store: Store) {
        this.header = this.store.selectSnapshot(state => state.header);
        this.contacts = this.store.selectSnapshot(state => state.contacts);
        this.configs = this.store.selectSnapshot(state => state.configs);
        this.configs.contactsFontSize ??= Globals.DEFAULTS.configs.contactsFontSize;
        this.configs.contactsIconSize ??= Globals.DEFAULTS.configs.contactsIconSize;
        this.configs.contactsListSpace ??= Globals.DEFAULTS.configs.contactsListSpace;
        this.configs.sidebarPadding ??= Globals.DEFAULTS.configs.sidebarPadding;
        this.configs.contactsSpace ??= Globals.DEFAULTS.configs.contactsSpace;
        this.limits = {
            contactsFontSize: {
                min: Globals.DEFAULTS.configs.contactsFontSizeMin,
                max: Globals.DEFAULTS.configs.contactsFontSizeMax,
            },
            contactsIconSize: {
                min: Globals.DEFAULTS.configs.contactsIconSizeMin,
                max: Globals.DEFAULTS.configs.contactsIconSizeMax,
            },
        };
    }

    setAddress(): void {
        this.store.dispatch(new PatchContacts({ address: this.contacts.address }));
    }

    setEmail(): void {
        this.store.dispatch(new PatchContacts({ email: this.contacts.email }));
    }

    setPhoneNumbers(): void {
        this.store.dispatch(new PatchContacts({ phoneNumbers: this.contacts.phoneNumbers }));
    }

    setLinkedIn(): void {
        this.store.dispatch(new PatchContacts({ linkedIn: this.contacts.linkedIn }));
    }

    setGitHub(): void {
        this.store.dispatch(new PatchContacts({ gitHub: this.contacts.gitHub }));
    }

    setFacebook(): void {
        this.store.dispatch(new PatchContacts({ facebook: this.contacts.facebook }));
    }

    setUrl(): void {
        this.store.dispatch(new PatchContacts({ url: this.contacts.url }));
    }

    setFontSize(): void {
        this.store.dispatch(new PatchConfig({ contactsFontSize: this.configs.contactsFontSize }));
    }

    setIconSize(): void {
        this.store.dispatch(new PatchConfig({ contactsIconSize: this.configs.contactsIconSize }));
    }

    click(counter: Changeable, decrease?: boolean): void {
        clearInterval(this.waitTimer);
        clearInterval(this.repeatTimer);
        if (decrease && this.configs[counter] <= this.limits![counter].min) {
            return;
        } else if (!decrease && this.configs[counter] >= this.limits![counter].max) {
            return;
        }
        this.configs[counter] += decrease ? -1 : +1;
        this.store.dispatch(new PatchConfig({ [counter]: this.configs[counter] }));
    }

    mousedown(counter: Changeable, decrease?: boolean): void {
        this.waitTimer = setTimeout(() => {
            this.repeatTimer = setInterval(() => {
                if (decrease && this.configs[counter] <= this.limits![counter].min) {
                    return;
                } else if (!decrease && this.configs[counter] >= this.limits![counter].max) {
                    return;
                }
                this.configs[counter] += decrease ? -1 : +1;
                this.store.dispatch(new PatchConfig({ [counter]: this.configs[counter] }));
            }, 50);
        }, 200);
    }

    mouseUp(): void {
        clearInterval(this.waitTimer);
        clearInterval(this.repeatTimer);
    }
}
