import { ConfigsStateModel } from "./configs.model";
import { Dynamics } from "../../interfaces/system.interfaces";

export namespace Config {
    export class PatchConfigs {
        static readonly type = "[Patch Configs]";

        constructor(public payload: Partial<ConfigsStateModel>) {}
    }

    export class PatchDynamics {
        static readonly type = "[Patch Dynamics]";

        constructor(public payload: Dynamics) {}
    }

    export class SetConfigs {
        static readonly type = "[Set Configs]";

        constructor(public payload: ConfigsStateModel) {}
    }
}
