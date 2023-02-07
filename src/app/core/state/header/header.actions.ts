import { HeaderStateModel } from "./header.model";

export namespace Header {
    export class PatchHeaderInfo {
        static readonly type = "[Set Header Info]";

        constructor(public payload: Partial<HeaderStateModel>) {}
    }
}
