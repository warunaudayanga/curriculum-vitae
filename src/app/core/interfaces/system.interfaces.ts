import { SectionType } from "../enums/section-type.enum";
import { ConfigsStateModel } from "../state/configs";
import { HeaderStateModel } from "../state/header";
import { ContactsStateModel } from "../state/contacts";
import { ThemeStateModel } from "../state/theme";
import { SectionSubListType } from "../enums/section-list-type.enu";

export interface SectionKeyValueListItem {
    id: string | number;
    title: string;
    value?: string;
}

export interface SectionSubListItem {
    id: string | number;
    title: string;
}

export interface SectionListItem {
    id: string | number;
    title: string;
    type?: SectionSubListType;
    listIndent?: number;
    list?: (SectionSubListItem & SectionKeyValueListItem)[];
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
    listIndent?: number;
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

export interface Dynamics {
    [key: string | number]: { title: string; width: number };
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
