import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ThemeStateModel } from "./theme.model";
import { Theme } from "./theme.actions";
import { Globals } from "../../../system/configs/globals";

@State<ThemeStateModel>({
    name: "theme",
    defaults: {
        name: Globals.THEMES[0].name,
        primaryColor: Globals.THEMES[0].primaryColor,
        secondaryColor: Globals.THEMES[0].secondaryColor,
        accentColor: Globals.THEMES[0].accentColor,
        textColor: Globals.THEMES[0].textColor,
        separatorColor: Globals.THEMES[0].separatorColor,
        mainLinkColor: Globals.THEMES[0].mainLinkColor,
        backgroundColor: Globals.THEMES[0].backgroundColor,
    },
})
@Injectable()
export class ThemeState {
    @Selector()
    static getTheme(state: ThemeStateModel): ThemeStateModel {
        return state;
    }

    @Action(Theme.PatchTheme)
    patchTheme({ patchState }: StateContext<ThemeStateModel>, action: Theme.PatchTheme): void {
        patchState(action.payload);
    }

    @Action(Theme.SetTheme)
    setTheme({ setState }: StateContext<ThemeStateModel>, action: Theme.SetTheme): void {
        setState(action.payload);
    }
}
