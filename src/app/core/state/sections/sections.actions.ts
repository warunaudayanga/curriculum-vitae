import { SectionsStateModel } from "./sections.model";

export namespace Sections {
    export class PatchSections {
        static readonly type = "[Set Sections]";

        constructor(public payload: Partial<SectionsStateModel>) {}
    }
}
