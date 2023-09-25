import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { ContactsStateModel } from "./contacts.model";
import { Contacts } from "./contacts.actions";

@State<ContactsStateModel>({
    name: "contacts",
    defaults: {
        email: undefined,
        phoneNumbers: undefined,
        address: undefined,
        linkedIn: undefined,
        gitHub: undefined,
        facebook: undefined,
        url: undefined,
        refereesUponRequest: undefined,
    },
})
@Injectable()
export class ContactsState {
    constructor(public store: Store) {}

    @Selector()
    static getContacts(state: ContactsStateModel): ContactsStateModel {
        return state;
    }

    @Action(Contacts.PatchContacts)
    patchContacts({ patchState }: StateContext<ContactsStateModel>, action: Contacts.PatchContacts): void {
        patchState(action.payload);
    }

    @Action(Contacts.SetContacts)
    setContacts({ setState }: StateContext<ContactsStateModel>, action: Contacts.SetContacts): void {
        setState(action.payload);
    }
}
