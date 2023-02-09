import { ThemeStateModel } from "./theme.model";

export namespace Theme {
    export class PatchTheme {
        static readonly type = "[Set Theme Info]";

        constructor(public payload: Partial<ThemeStateModel>) {}
    }

    export class SetTheme {
        static readonly type = "[Set Theme Info]";

        constructor(public payload: ThemeStateModel) {}
    }
}
