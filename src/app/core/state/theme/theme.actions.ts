import { ThemeStateModel } from "./theme.model";

export namespace Theme {
    export class PatchTheme {
        static readonly type = "[Patch Theme]";

        constructor(public payload: Partial<ThemeStateModel>) {}
    }

    export class SetTheme {
        static readonly type = "[Set Theme]";

        constructor(public payload: ThemeStateModel) {}
    }
}
