import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { ConfigsStateModel } from "./configs.model";
import { Config } from "./configs.actions";
import { Globals } from "src/app/system/configs/globals";

// noinspection DuplicatedCode
@State<ConfigsStateModel>({
    name: "configs",
    defaults: {
        mainContentPadding: Globals.DEFAULTS.CONFIGS.MAIN_CONTENT_PADDING,
        mainContentPaddingMin: Globals.DEFAULTS.CONFIGS.MAIN_CONTENT_PADDING_MIN,
        mainContentPaddingMax: Globals.DEFAULTS.CONFIGS.MAIN_CONTENT_PADDING_MAX,
        sidebarPadding: Globals.DEFAULTS.CONFIGS.SIDEBAR_PADDING,
        sidebarPaddingMin: Globals.DEFAULTS.CONFIGS.SIDEBAR_PADDING_MIN,
        sidebarPaddingMax: Globals.DEFAULTS.CONFIGS.SIDEBAR_PADDING_MAX,
        sidebarSpace: Globals.DEFAULTS.CONFIGS.SIDEBAR_SPACE,
        sidebarSpaceMin: Globals.DEFAULTS.CONFIGS.SIDEBAR_SPACE_MIN,
        sidebarSpaceMax: Globals.DEFAULTS.CONFIGS.SIDEBAR_SPACE_MAX,
        headerFontSize: Globals.DEFAULTS.CONFIGS.HEADER_FONT_SIZE,
        headerFontSizeMin: Globals.DEFAULTS.CONFIGS.HEADER_FONT_SIZE_MIN,
        headerFontSizeMax: Globals.DEFAULTS.CONFIGS.HEADER_FONT_SIZE_MAX,
        imageWidth: Globals.DEFAULTS.CONFIGS.IMAGE_WIDTH,
        imageWidthMin: Globals.DEFAULTS.CONFIGS.IMAGE_WIDTH_MIN,
        imageWidthMax: Globals.DEFAULTS.CONFIGS.IMAGE_WIDTH_MAX,
        imageHeight: Globals.DEFAULTS.CONFIGS.IMAGE_HEIGHT,
        imageHeightMin: Globals.DEFAULTS.CONFIGS.IMAGE_HEIGHT_MIN,
        imageHeightMax: Globals.DEFAULTS.CONFIGS.IMAGE_HEIGHT_MAX,
        contactsFontSize: Globals.DEFAULTS.CONFIGS.CONTACTS_FONT_SIZE,
        contactsFontSizeMin: Globals.DEFAULTS.CONFIGS.CONTACTS_FONT_SIZE_MIN,
        contactsFontSizeMax: Globals.DEFAULTS.CONFIGS.CONTACTS_FONT_SIZE_MAX,
        contactsIconSize: Globals.DEFAULTS.CONFIGS.CONTACTS_ICON_SIZE,
        contactsIconSizeMin: Globals.DEFAULTS.CONFIGS.CONTACTS_ICON_SIZE_MIN,
        contactsIconSizeMax: Globals.DEFAULTS.CONFIGS.CONTACTS_ICON_SIZE_MAX,
        contactsSpace: Globals.DEFAULTS.CONFIGS.CONTACTS_SPACE,
        contactsSpaceMin: Globals.DEFAULTS.CONFIGS.CONTACTS_SPACE_MIN,
        contactsSpaceMax: Globals.DEFAULTS.CONFIGS.CONTACTS_SPACE_MAX,
        contactsListSpace: Globals.DEFAULTS.CONFIGS.CONTACTS_LIST_SPACE,
        contactsListSpaceMin: Globals.DEFAULTS.CONFIGS.CONTACTS_LIST_SPACE_MIN,
        contactsListSpaceMax: Globals.DEFAULTS.CONFIGS.CONTACTS_LIST_SPACE_MAX,
        sectionTitleFontSize: Globals.DEFAULTS.CONFIGS.SECTION_TITLE_FONT_SIZE,
        sectionTitleFontSizeMin: Globals.DEFAULTS.CONFIGS.SECTION_TITLE_FONT_SIZE_MIN,
        sectionTitleFontSizeMax: Globals.DEFAULTS.CONFIGS.SECTION_TITLE_FONT_SIZE_MAX,
        sectionTextFontSize: Globals.DEFAULTS.CONFIGS.SECTION_TEXT_FONT_SIZE,
        sectionTextFontSizeMin: Globals.DEFAULTS.CONFIGS.SECTION_TEXT_FONT_SIZE_MIN,
        sectionTextFontSizeMax: Globals.DEFAULTS.CONFIGS.SECTION_TEXT_FONT_SIZE_MAX,
        sectionSubTextFontSize: Globals.DEFAULTS.CONFIGS.SECTION_SUB_TEXT_FONT_SIZE,
        sectionSubTextFontSizeMin: Globals.DEFAULTS.CONFIGS.SECTION_SUB_TEXT_FONT_SIZE_MIN,
        sectionSubTextFontSizeMax: Globals.DEFAULTS.CONFIGS.SECTION_SUB_TEXT_FONT_SIZE_MAX,
        sectionTextLineHeight: Globals.DEFAULTS.CONFIGS.SECTION_TEXT_LINE_HEIGHT,
        sectionTextLineHeightMin: Globals.DEFAULTS.CONFIGS.SECTION_TEXT_LINE_HEIGHT_MIN,
        sectionTextLineHeightMax: Globals.DEFAULTS.CONFIGS.SECTION_TEXT_LINE_HEIGHT_MAX,
        sectionSpace: Globals.DEFAULTS.CONFIGS.SECTION_SPACE,
        sectionSpaceMin: Globals.DEFAULTS.CONFIGS.SECTION_SPACE_MIN,
        sectionSpaceMax: Globals.DEFAULTS.CONFIGS.SECTION_SPACE_MAX,
        sectionItemSpace: Globals.DEFAULTS.CONFIGS.SECTION_ITEM_SPACE,
        sectionItemSpaceMin: Globals.DEFAULTS.CONFIGS.SECTION_ITEM_SPACE_MIN,
        sectionItemSpaceMax: Globals.DEFAULTS.CONFIGS.SECTION_ITEM_SPACE_MAX,
        sectionSeparatorSpace: Globals.DEFAULTS.CONFIGS.SECTION_SEPARATOR_SPACE,
        sectionSeparatorSpaceMin: Globals.DEFAULTS.CONFIGS.SECTION_SEPARATOR_SPACE_MIN,
        sectionSeparatorSpaceMax: Globals.DEFAULTS.CONFIGS.SECTION_SEPARATOR_SPACE_MAX,
        sectionListItemSpace: Globals.DEFAULTS.CONFIGS.SECTION_LIST_ITEM_SPACE,
        sectionListItemSpaceMin: Globals.DEFAULTS.CONFIGS.SECTION_LIST_ITEM_SPACE_MIN,
        sectionListItemSpaceMax: Globals.DEFAULTS.CONFIGS.SECTION_LIST_ITEM_SPACE_MAX,
    },
})
@Injectable()
export class ConfigsState {
    constructor(public store: Store) {}

    @Selector()
    static getConfig(state: ConfigsStateModel): ConfigsStateModel {
        return state;
    }

    @Action(Config.PatchConfigs)
    patchConfig({ patchState }: StateContext<ConfigsStateModel>, action: Config.PatchConfigs): void {
        patchState(action.payload);
    }

    @Action(Config.SetConfigs)
    setConfig({ setState }: StateContext<ConfigsStateModel>, action: Config.SetConfigs): void {
        setState(action.payload);
    }
}
