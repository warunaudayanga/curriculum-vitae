import { Component } from "@angular/core";
import { Section } from "../../../../../core/interfaces/system.interfaces";
import { SectionType } from "../../../../../core/enums/section-type.enum";

@Component({
    selector: "app-cv-main-content-tips",
    templateUrl: "./cv-main-content-tips.component.html",
    styleUrls: ["./cv-main-content-tips.component.scss"],
})
export class CvMainContentTipsComponent {
    sampleSection: Section = {
        id: "tips",
        title: "<Tile>",
        type: SectionType.PARAGRAPH,
        paragraph: "&lt;Text&gt;",
    };

    sampleParagraph: Section = {
        id: "tips",
        title: "PROFILE",
        type: SectionType.PARAGRAPH,
        paragraph:
            "Seeking a challenging position to obtain the knowledge and experiences, while contributing to " +
            "the organization’s vision, mission and giving my best effort and skills to achieve organizational goals.",
    };

    sampleList: Section = {
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
    };

    sampleListWithParagraph: Section = {
        id: "tips",
        title: "PROGRAMING AND IT SKILLS",
        type: SectionType.LIST_WITH_PARAGRAPH,
        listWithParagraph: {
            title: "Studied about several programing languages, technologies, frameworks and well improved through projects",
            list: [
                {
                    id: 2,
                    title: "Java",
                },
                {
                    id: 3,
                    title: "MS Office Package Applications",
                },
            ],
        },
    };

    sampleKeyValueList: Section = {
        id: "tips",
        title: "PERSONAL DETAILS",
        type: SectionType.NAME_VALUE_LIST,
        keyValueList: [
            { id: 1, title: "Name", value: "Your Name" },
            { id: 2, title: "Birthday", value: "10th May 1995" },
            { id: 3, title: "Gender", value: "Male" },
        ],
    };

    sampleColumns: Section = {
        id: "tips",
        title: "NON RELATED REFEREES",
        type: SectionType.COLUMNS,
        columns: [
            {
                lines: [
                    "<b>Title and Referee Name</b>",
                    "<b>Position of the referee</b>,",
                    "Address line 1,",
                    "Address line 2,",
                    "Address line 3.",
                    "<br>",
                    "Tel: +94 77 477 4777",
                ],
            },
            {
                lines: [
                    "<b>Title and Referee Name</b>",
                    "<b>Position of the referee,</b>",
                    "Address line 1,",
                    "Address line 2,",
                    "Address line 3.",
                    "<br>",
                    "Tel: +94 77 477 4777",
                ],
            },
        ],
    };

    sampleSignature: Section = {
        id: "tips",
        title: "SIGNATURE",
        type: SectionType.SIGNATURE,
        signature: {
            name: "Your Name",
            date: "01/01/2009",
        },
    };
}
