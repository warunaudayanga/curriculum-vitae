import { HeaderStateModel } from "./header.model";

export namespace Header {
    export class PatchHeader {
        static readonly type = "[Patch Header]";

        constructor(public payload: Partial<HeaderStateModel>) {}
    }

    export class SetHeader {
        static readonly type = "[Set Header]";

        constructor(public payload: HeaderStateModel) {}
    }
}
