import { ContactsStateModel } from "./contacts.model";

export namespace Contacts {
    export class PatchContacts {
        static readonly type = "[Patch Contacts]";

        constructor(public payload: Partial<ContactsStateModel>) {}
    }

    export class SetContacts {
        static readonly type = "[Set Contacts]";

        constructor(public payload: ContactsStateModel) {}
    }
}
