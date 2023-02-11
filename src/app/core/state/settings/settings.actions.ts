import { SettingsStateModel } from "./settings.model";

export namespace Settings {
    export class PatchSettings {
        static readonly type = "[Patch Settings]";

        constructor(public payload: Partial<SettingsStateModel>) {}
    }

    export class SetSettings {
        static readonly type = "[Set Settings]";

        constructor(public payload: SettingsStateModel) {}
    }
}
