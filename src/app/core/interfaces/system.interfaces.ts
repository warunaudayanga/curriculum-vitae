import { SectionType } from "../enums/section-type.enum";
import { ConfigsStateModel } from "../state/configs";
import { HeaderStateModel } from "../state/header";
import { ContactsStateModel } from "../state/contacts";
import { ThemeStateModel } from "../state/theme";

export interface SectionListItem {
    id: string | number;
    title: string;
    list?: Omit<SectionListItem, "list">[];
}

export interface SectionKeyValueListItem {
    id: string | number;
    title: string;
    value?: string;
}

export interface Column {
    lines: string[];
}

export interface ListWithParagraph {
    title: string;
    list?: SectionListItem[];
}

export interface Signature {
    name?: string;
    sign?: string;
    date: string;
}

export interface Section {
    id: string | number;
    title: string;
    type: SectionType;
    paragraph?: string;
    listWithParagraph?: ListWithParagraph;
    list?: SectionListItem[];
    keyValueList?: SectionKeyValueListItem[];
    columns?: [Column, Column];
    signature?: Signature;
}

export interface PreDefinedSection {
    id: string | number;
    name: string;
}

export type Limits<Changeable extends string> = {
    [key in Changeable]: {
        min: number;
        max: number;
    };
};

export interface THEME {
    NAME: string;
    PRIMARY_COLOR: string;
    ACCENT_COLOR: string;
    SEPARATOR_COLOR: string;
    SECONDARY_COLOR: string;
    TEXT_COLOR: string;
    MAIN_LINK_COLOR: string;
    BACKGROUND_COLOR: string;
}

export interface CVData {
    header?: HeaderStateModel;
    contacts?: ContactsStateModel;
    configs?: ConfigsStateModel;
    theme?: ThemeStateModel;
    sections?: Section[];
    sidebar?: Section[];
    importValidation?: "4274";
}

export interface CVPage extends Omit<CVData, "header" | "contacts"> {}
