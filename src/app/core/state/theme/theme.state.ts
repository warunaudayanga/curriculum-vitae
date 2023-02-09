import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ThemeStateModel } from "./theme.model";
import { Theme } from "./theme.actions";
import { Globals } from "../../../system/configs/globals";

@State<ThemeStateModel>({
    name: "theme",
    defaults: {
        name: Globals.THEMES[0].NAME,
        primaryColor: Globals.THEMES[0].PRIMARY_COLOR,
        secondaryColor: Globals.THEMES[0].SECONDARY_COLOR,
        accentColor: Globals.THEMES[0].ACCENT_COLOR,
        textColor: Globals.THEMES[0].TEXT_COLOR,
        separatorColor: Globals.THEMES[0].SEPARATOR_COLOR,
        mainLinkColor: Globals.THEMES[0].MAIN_LINK_COLOR,
    },
})
@Injectable()
export class ThemeState {
    @Selector()
    static getThemeDetails(state: ThemeStateModel): ThemeStateModel {
        return state;
    }

    @Action(Theme.PatchTheme)
    patchTheme({ patchState }: StateContext<ThemeStateModel>, action: Theme.PatchTheme): void {
        patchState(action.payload);
    }

    @Action(Theme.SetTheme)
    setContacts({ setState }: StateContext<ThemeStateModel>, action: Theme.SetTheme): void {
        setState(action.payload);
    }
}
