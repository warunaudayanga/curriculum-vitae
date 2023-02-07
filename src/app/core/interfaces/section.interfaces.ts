import { SectionType } from "../enums/section-type.enum";

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
    list: Omit<SectionListItem, "list">[];
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

export interface Header {
    title: string;
    fontSize: number;
    includeImage: boolean;
    image: string;
    imageWidth: number;
    imageHeight: number;
}

export interface Contacts {
    email?: string;
    phoneNumbers?: string[];
    address?: string;
    fontSize: number;
    iconSize: number;
}

export interface CVData {
    header: Header;
    contacts: Contacts;
    sections?: Section[];
    sidebar?: Section[];
}

export interface CVPage extends Omit<CVData, "header" | "contacts"> {}
