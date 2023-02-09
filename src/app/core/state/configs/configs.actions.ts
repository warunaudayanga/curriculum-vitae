import { ConfigsStateModel } from "./configs.model";

export namespace Config {
    export class PatchConfigs {
        static readonly type = "[Patch Configs]";

        constructor(public payload: Partial<ConfigsStateModel>) {}
    }

    export class SetConfigs {
        static readonly type = "[Set Configs]";

        constructor(public payload: ConfigsStateModel) {}
    }
}
