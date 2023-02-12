import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { SettingsStateModel } from "./settings.model";
import { Settings } from "./settings.actions";

@State<SettingsStateModel>({
    name: "settings",
    defaults: {
        hasChanged: false,
        mainTipShown: false,
        printTipShown: false,
        tuneUpTipShown: false,
    },
})
@Injectable()
export class SettingsState {
    @Selector()
    static getSettings(state: SettingsStateModel): SettingsStateModel {
        return state;
    }

    @Action(Settings.PatchSettings)
    patchSettings({ patchState }: StateContext<SettingsStateModel>, action: Settings.PatchSettings): void {
        patchState(action.payload);
    }

    @Action(Settings.SetSettings)
    setSettings({ setState }: StateContext<SettingsStateModel>, action: Settings.SetSettings): void {
        setState(action.payload);
    }
}
