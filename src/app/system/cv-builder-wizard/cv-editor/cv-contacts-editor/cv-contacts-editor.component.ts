import { AfterViewInit, Component } from "@angular/core";
import { Header, HeaderStateModel } from "../../../../core/state/header";
import { Store } from "@ngxs/store";
import SetHeaderInfo = Header.PatchHeaderInfo;
import { ContactsStateModel } from "../../../../core/state/contacts/contacts.model";
import { Contacts } from "../../../../core/state/contacts/contacts.actions";
import PatchContacts = Contacts.PatchContacts;

type Counter = "fontSize" | "iconSize";

@Component({
    selector: "app-cv-contacts-editor",
    templateUrl: "./cv-contacts-editor.component.html",
    styleUrls: ["./cv-contacts-editor.component.scss"],
})
export class CVContactsEditorComponent implements AfterViewInit {
    header: HeaderStateModel;

    contacts: ContactsStateModel;

    waitTimer?: NodeJS.Timer;

    repeatTimer?: NodeJS.Timer;

    limits?: {
        [key in Counter]: {
            min: number;
            max: number;
        };
    };

    constructor(private store: Store) {
        this.header = this.store.selectSnapshot(state => state.header);
        this.contacts = this.store.selectSnapshot(state => state.contacts);
    }

    ngAfterViewInit(): void {
        this.limits = {
            fontSize: {
                min: 13,
                max: 20,
            },
            iconSize: {
                min: 14,
                max: 25,
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

    setFontSize(): void {
        this.store.dispatch(new PatchContacts({ fontSize: this.contacts.fontSize }));
    }

    setIconSize(): void {
        this.store.dispatch(new PatchContacts({ iconSize: this.contacts.iconSize }));
    }

    click(counter: Counter, decrease?: boolean): void {
        clearInterval(this.waitTimer);
        clearInterval(this.repeatTimer);
        if (decrease && this.contacts[counter] <= this.limits![counter].min) {
            return;
        } else if (!decrease && this.contacts[counter] >= this.limits![counter].max) {
            return;
        }
        this.contacts[counter] += decrease ? -1 : +1;
        this.store.dispatch(new SetHeaderInfo({ [counter]: this.contacts[counter] }));
    }

    mousedown(counter: Counter, decrease?: boolean): void {
        this.waitTimer = setTimeout(() => {
            this.repeatTimer = setInterval(() => {
                if (decrease && this.contacts[counter] <= this.limits![counter].min) {
                    return;
                } else if (!decrease && this.contacts[counter] >= this.limits![counter].max) {
                    return;
                }
                this.contacts[counter] += decrease ? -1 : +1;
                this.store.dispatch(new SetHeaderInfo({ [counter]: this.contacts[counter] }));
            }, 50);
        }, 200);
    }

    mouseUp(): void {
        clearInterval(this.waitTimer);
        clearInterval(this.repeatTimer);
    }
}
