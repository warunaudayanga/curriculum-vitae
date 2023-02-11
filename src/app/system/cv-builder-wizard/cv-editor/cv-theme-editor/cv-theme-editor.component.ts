import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { CVData, Section } from "../../../../core/interfaces/system.interfaces";
import { CvViewerComponent } from "../../cv-viewer/cv-viewer.component";
import { fitTo } from "../../../../core/utils/utils";
import { SectionType } from "../../../../core/enums/section-type.enum";
import { Globals } from "../../../configs/globals";

@Component({
    selector: "app-cv-theme-editor",
    templateUrl: "./cv-theme-editor.component.html",
    styleUrls: ["./cv-theme-editor.component.scss"],
})
export class CVThemeEditorComponent implements AfterViewInit {
    @ViewChild(CvViewerComponent, { read: ElementRef }) cv!: ElementRef<HTMLDivElement>;

    @ViewChild("cvContainer") cvContainer!: ElementRef<HTMLDivElement>;

    sections: Section[] = [
        {
            id: 1,
            title: "PROFILE",
            type: SectionType.PARAGRAPH,
            paragraph:
                "Seeking a challenging position to obtain the knowledge and experiences, " +
                "while contributing to the organization’s vision, mission and giving my " +
                "best effort and skills to achieve organizational goals.",
        },
        {
            id: 2,
            title: "WORK EXPERIENCE",
            type: SectionType.LIST,
            list: [
                {
                    id: 1,
                    title: "Currently working as a <b>Software Engineer</b> at <b>Example (PVT) Ltd</b> - <b>1 year</b>.",
                    list: [
                        {
                            id: 1,
                            title: "<b><a class='aa' href=''>Project</a></b> (Angular Bootstrap + Node Express.js)",
                        },
                        { id: 2, title: "<b><a href=''>Another Project</a></b> (Angular Bootstrap + Node NestJS)" },
                    ],
                },
                {
                    id: 2,
                    title: "Have worked <b>six months</b> as a <b>Hardware Technician</b> at <b>Example Technologies (PVT) Ltd, Galle</b>.",
                },
                {
                    id: 3,
                    title: "Have worked <b>six months</b> as a <b>Networking Technician</b> at <b>Example Technologies (PVT) Ltd, Galle</b>.",
                },
            ],
        },
        {
            id: 3,
            title: "LEADERSHIP AND TEAMWORK SKILLS",
            type: SectionType.LIST,
            list: [
                { id: 1, title: "Group leader of group projects in <b>College of Technology</b> - Galle." },
                {
                    id: 2,
                    title: "Student Leader of <b>Junior School</b> (2010) and have organized several programs in school.",
                },
                { id: 3, title: "An active member of several associations at school in several grades." },
            ],
        },
        {
            id: 4,
            title: "NON RELATED REFEREES",
            type: SectionType.COLUMNS,
            columns: [
                {
                    lines: [
                        "<b>Mrs. Referee Name</b>",
                        "<b>(MSc in IT, PG Dip in IT, BIT),</b>",
                        "Instructor (SLTES),",
                        "Department of Technical, Education and Training,",
                        "College of technology,",
                        "Galle.",
                        "Tel: +94 77 477 4777",
                    ],
                },
                {
                    lines: [
                        "<b>Mr. Referee Name</b>,",
                        "Lecturer (SLTES),",
                        "Department of Technical, Education and Training,",
                        "College of technology,",
                        "Galle.",
                        "Tel: +94 77 477 4777",
                    ],
                },
            ],
        },
        {
            id: 5,
            title: "CERTIFICATION",
            type: SectionType.PARAGRAPH,
            paragraph:
                "I certify that, the above mentioned particulars furnished by me are " +
                "true and accurate and if I’m selected, I promise to perform my duties " +
                "efficiently, loyalty and obediently to your entire satisfaction",
        },
        {
            id: 6,
            title: "SIGNATURE",
            type: SectionType.SIGNATURE,
            signature: {
                sign: "assets/images/signature.png",
                name: "Waruna Udayanga",
                date: "",
            },
        },
    ];

    sidebar: Section[] = [
        {
            id: 1,
            title: "PERSONAL DETAILS",
            type: SectionType.NAME_VALUE_LIST,
            keyValueList: [
                { id: 1, title: "Name", value: "Your Name" },
                { id: 2, title: "Birthday", value: "10th May 1995" },
                { id: 3, title: "Gender", value: "Male" },
                { id: 4, title: "Nationality", value: "Sri Lankan" },
                { id: 5, title: "Civil Status", value: "Single" },
                { id: 6, title: "School", value: "Your School" },
            ],
        },
        {
            id: 2,
            title: "CAREER GOALS",
            type: SectionType.PARAGRAPH,
            paragraph:
                "Lore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore " +
                "et dolore magna aliqua. Ut enim ad minim veniam,",
        },
        {
            id: 3,
            title: "OTHER SKILLS",
            type: SectionType.LIST,
            list: [
                { id: 1, title: "Communication Skills" },
                { id: 2, title: "Analytical Skills" },
                { id: 3, title: "Management Skills" },
                { id: 4, title: "Organizing Skills" },
                { id: 5, title: "Interpersonal Relationships" },
                { id: 6, title: " Positive Attitudes" },
            ],
        },
    ];

    // noinspection DuplicatedCode
    cvData: CVData = {
        header: {
            title: "Your Name",
            includeImage: true,
            image: "assets/images/avatar.jpeg",
        },
        contacts: {
            email: "example@mail.com",
            phoneNumbers: ["+94 77 477 4777", "+94 77 488 4888"],
            address: "No. 1/1, 2nd Lane, Kottawa, Matara.",
        },
        theme: {
            name: Globals.DEFAULTS.THEME.NAME,
            primaryColor: Globals.DEFAULTS.THEME.PRIMARY_COLOR,
            secondaryColor: Globals.DEFAULTS.THEME.SECONDARY_COLOR,
            accentColor: Globals.DEFAULTS.THEME.ACCENT_COLOR,
            textColor: Globals.DEFAULTS.THEME.TEXT_COLOR,
            separatorColor: Globals.DEFAULTS.THEME.SEPARATOR_COLOR,
            mainLinkColor: Globals.DEFAULTS.THEME.MAIN_LINK_COLOR,
            backgroundColor: Globals.DEFAULTS.THEME.BACKGROUND_COLOR,
        },
        configs: {
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
        sections: this.sections,
        sidebar: this.sidebar,
    };

    ngAfterViewInit(): void {
        fitTo(this.cv.nativeElement, this.cvContainer.nativeElement, "right", [15, 25, 15, 15]);
    }
}
