import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { CVData, Section } from "../../../../core/interfaces/system.interfaces";
import { CVViewerComponent } from "../../cv-viewer/cv-viewer.component";
import { fitTo } from "../../../../core/utils/utils";
import { SectionType } from "../../../../core/enums/section-type.enum";
import { Globals } from "../../../configs/globals";

@Component({
    selector: "app-cv-theme-editor",
    templateUrl: "./cv-theme-editor.component.html",
    styleUrls: ["./cv-theme-editor.component.scss"],
})
export class CVThemeEditorComponent implements AfterViewInit {
    @ViewChild(CVViewerComponent, { read: ElementRef }) cv!: ElementRef<HTMLDivElement>;

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
            name: "Your Name",
            title: "Title",
            includeImage: true,
            image: "assets/images/avatar.jpeg",
        },
        contacts: {
            email: "example@mail.com",
            phoneNumbers: ["+94 77 477 4777", "+94 77 488 4888"],
            address: "No. 1/1, 2nd Lane, Kottawa, Matara.",
            refereesUponRequest: false,
        },
        theme: {
            name: Globals.DEFAULTS.theme.name,
            primaryColor: Globals.DEFAULTS.theme.primaryColor,
            secondaryColor: Globals.DEFAULTS.theme.secondaryColor,
            accentColor: Globals.DEFAULTS.theme.accentColor,
            textColor: Globals.DEFAULTS.theme.textColor,
            separatorColor: Globals.DEFAULTS.theme.separatorColor,
            mainLinkColor: Globals.DEFAULTS.theme.mainLinkColor,
            backgroundColor: Globals.DEFAULTS.theme.backgroundColor,
        },
        configs: {
            dynamics: Globals.DEFAULTS.configs.dynamics,
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
        sections: this.sections,
        sidebar: this.sidebar,
    };

    ngAfterViewInit(): void {
        fitTo(this.cv.nativeElement, this.cvContainer.nativeElement, "right", [15, 25, 15, 15]);
    }
}
