import { SectionsStateModel } from "./sections.model";

export namespace Sections {
    export class PatchSections {
        static readonly type = "[Patch Sections]";

        constructor(public payload: Partial<SectionsStateModel>) {}
    }
    export class SetSections {
        static readonly type = "[Set Sections]";

        constructor(public payload: SectionsStateModel) {}
    }
}
