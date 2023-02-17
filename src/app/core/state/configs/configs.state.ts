import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { ConfigsStateModel } from "./configs.model";
import { Config } from "./configs.actions";
import { Globals } from "src/app/system/configs/globals";
import { Dynamics } from "../../interfaces/system.interfaces";

// noinspection DuplicatedCode
@State<ConfigsStateModel>({
    name: "configs",
    defaults: {
        dynamics: {},
        mainContentPadding: Globals.DEFAULTS.configs.mainContentPadding,
        mainContentPaddingMin: Globals.DEFAULTS.configs.mainContentPaddingMin,
        mainContentPaddingMax: Globals.DEFAULTS.configs.mainContentPaddingMax,
        sidebarPadding: Globals.DEFAULTS.configs.sidebarPadding,
        sidebarPaddingMin: Globals.DEFAULTS.configs.sidebarPaddingMin,
        sidebarPaddingMax: Globals.DEFAULTS.configs.sidebarPaddingMax,
        sidebarSpace: Globals.DEFAULTS.configs.sidebarSpace,
        sidebarSpaceMin: Globals.DEFAULTS.configs.sidebarSpaceMin,
        sidebarSpaceMax: Globals.DEFAULTS.configs.sidebarSpaceMax,
        headerNameFontSize: Globals.DEFAULTS.configs.headerNameFontSize,
        headerNameFontSizeMin: Globals.DEFAULTS.configs.headerNameFontSizeMin,
        headerNameFontSizeMax: Globals.DEFAULTS.configs.headerNameFontSizeMax,
        headerNameLineHeight: Globals.DEFAULTS.configs.headerNameLineHeight,
        headerNameLineHeightMin: Globals.DEFAULTS.configs.headerNameLineHeightMin,
        headerNameLineHeightMax: Globals.DEFAULTS.configs.headerNameLineHeightMax,
        headerTitleFontSize: Globals.DEFAULTS.configs.headerTitleFontSize,
        headerTitleFontSizeMin: Globals.DEFAULTS.configs.headerTitleFontSizeMin,
        headerTitleFontSizeMax: Globals.DEFAULTS.configs.headerTitleFontSizeMax,
        headerTitleLineHeight: Globals.DEFAULTS.configs.headerTitleLineHeight,
        headerTitleLineHeightMin: Globals.DEFAULTS.configs.headerTitleLineHeightMin,
        headerTitleLineHeightMax: Globals.DEFAULTS.configs.headerTitleLineHeightMax,
        imageWidth: Globals.DEFAULTS.configs.imageWidth,
        imageWidthMin: Globals.DEFAULTS.configs.imageWidthMin,
        imageWidthMax: Globals.DEFAULTS.configs.imageWidthMax,
        imageHeight: Globals.DEFAULTS.configs.imageHeight,
        imageHeightMin: Globals.DEFAULTS.configs.imageHeightMin,
        imageHeightMax: Globals.DEFAULTS.configs.imageHeightMax,
        contactsFontSize: Globals.DEFAULTS.configs.contactsFontSize,
        contactsFontSizeMin: Globals.DEFAULTS.configs.contactsFontSizeMin,
        contactsFontSizeMax: Globals.DEFAULTS.configs.contactsFontSizeMax,
        contactsIconSize: Globals.DEFAULTS.configs.contactsIconSize,
        contactsIconSizeMin: Globals.DEFAULTS.configs.contactsIconSizeMin,
        contactsIconSizeMax: Globals.DEFAULTS.configs.contactsIconSizeMax,
        contactsSpace: Globals.DEFAULTS.configs.contactsSpace,
        contactsSpaceMin: Globals.DEFAULTS.configs.contactsSpaceMin,
        contactsSpaceMax: Globals.DEFAULTS.configs.contactsSpaceMax,
        contactsListSpace: Globals.DEFAULTS.configs.contactsListSpace,
        contactsListSpaceMin: Globals.DEFAULTS.configs.contactsListSpaceMin,
        contactsListSpaceMax: Globals.DEFAULTS.configs.contactsListSpaceMax,
        sectionTitleFontSize: Globals.DEFAULTS.configs.sectionTitleFontSize,
        sectionTitleFontSizeMin: Globals.DEFAULTS.configs.sectionTitleFontSizeMin,
        sectionTitleFontSizeMax: Globals.DEFAULTS.configs.sectionTitleFontSizeMax,
        sectionTextFontSize: Globals.DEFAULTS.configs.sectionTextFontSize,
        sectionTextFontSizeMin: Globals.DEFAULTS.configs.sectionTextFontSizeMin,
        sectionTextFontSizeMax: Globals.DEFAULTS.configs.sectionTextFontSizeMax,
        sectionSubTextFontSize: Globals.DEFAULTS.configs.sectionSubTextFontSize,
        sectionSubTextFontSizeMin: Globals.DEFAULTS.configs.sectionSubTextFontSizeMin,
        sectionSubTextFontSizeMax: Globals.DEFAULTS.configs.sectionSubTextFontSizeMax,
        sectionTextLineHeight: Globals.DEFAULTS.configs.sectionTextLineHeight,
        sectionTextLineHeightMin: Globals.DEFAULTS.configs.sectionTextLineHeightMin,
        sectionTextLineHeightMax: Globals.DEFAULTS.configs.sectionTextLineHeightMax,
        sectionSpace: Globals.DEFAULTS.configs.sectionSpace,
        sectionSpaceMin: Globals.DEFAULTS.configs.sectionSpaceMin,
        sectionSpaceMax: Globals.DEFAULTS.configs.sectionSpaceMax,
        sectionItemSpace: Globals.DEFAULTS.configs.sectionItemSpace,
        sectionItemSpaceMin: Globals.DEFAULTS.configs.sectionItemSpaceMin,
        sectionItemSpaceMax: Globals.DEFAULTS.configs.sectionItemSpaceMax,
        sectionSeparatorSpace: Globals.DEFAULTS.configs.sectionSeparatorSpace,
        sectionSeparatorSpaceMin: Globals.DEFAULTS.configs.sectionSeparatorSpaceMin,
        sectionSeparatorSpaceMax: Globals.DEFAULTS.configs.sectionSeparatorSpaceMax,
        sectionListItemSpace: Globals.DEFAULTS.configs.sectionListItemSpace,
        sectionListItemSpaceMin: Globals.DEFAULTS.configs.sectionListItemSpaceMin,
        sectionListItemSpaceMax: Globals.DEFAULTS.configs.sectionListItemSpaceMax,
    },
})
@Injectable()
export class ConfigsState {
    constructor(public store: Store) {}

    @Selector()
    static getConfig(state: ConfigsStateModel): ConfigsStateModel {
        return state;
    }

    @Selector()
    static getDynamics(state: ConfigsStateModel): Dynamics {
        return state.dynamics;
    }

    @Action(Config.PatchConfigs)
    patchConfig({ patchState }: StateContext<ConfigsStateModel>, action: Config.PatchConfigs): void {
        patchState(action.payload);
    }

    @Action(Config.PatchDynamics)
    patchDynamics({ getState, patchState }: StateContext<ConfigsStateModel>, action: Config.PatchDynamics): void {
        patchState({ ...getState(), dynamics: { ...getState().dynamics, ...action.payload } });
    }

    @Action(Config.SetConfigs)
    setConfig({ setState }: StateContext<ConfigsStateModel>, action: Config.SetConfigs): void {
        setState(action.payload);
    }
}
