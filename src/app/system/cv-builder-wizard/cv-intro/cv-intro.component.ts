import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { CVData, Section } from "../../../core/interfaces/section.interfaces";
import { CvViewerComponent } from "../cv-viewer/cv-viewer.component";
import { fitTo } from "../../../core/utils/utils";
import { SectionType } from "../../../core/enums/section-type.enum";

@Component({
    selector: "app-cv-intro",
    templateUrl: "./cv-intro.component.html",
    styleUrls: ["./cv-intro.component.scss"],
})
export class CvIntroComponent implements AfterViewInit {
    @ViewChild(CvViewerComponent, { read: ElementRef }) cv!: ElementRef<HTMLDivElement>;

    @ViewChild("headingLabel") headingLabel!: ElementRef<HTMLDivElement>;

    @ViewChild("contactsLabel") contactsLabel!: ElementRef<HTMLDivElement>;

    @ViewChild("sidebarContentLabel") sidebarContentLabel!: ElementRef<HTMLDivElement>;

    @ViewChild("mainContentLabel") mainContentLabel!: ElementRef<HTMLDivElement>;

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

    cvData: CVData = {
        header: {
            title: "Your Name",
            fontSize: 25,
            includeImage: true,
            image: "assets/images/avatar.jpeg",
            imageWidth: 120,
            imageHeight: 150,
        },
        contacts: {
            email: "example@mail.com",
            phoneNumbers: ["+94 77 477 4777", "+94 77 488 4888"],
            address: "No. 1/1, 2nd Lane, Kottawa, Matara.",
            fontSize: 14,
            iconSize: 15,
        },
        sections: this.sections,
        sidebar: this.sidebar,
    };

    constructor(private elementRef: ElementRef<HTMLDivElement>) {}

    ngAfterViewInit(): void {
        const margin = 15;
        fitTo(this.cv.nativeElement, this.elementRef.nativeElement, margin, true);
        setTimeout(() => {
            const bounds = this.cv.nativeElement.getBoundingClientRect();

            const position = {
                headingLabel: {
                    top: margin + bounds.height * (7 / 100),
                    left: bounds.left - this.headingLabel.nativeElement.clientWidth - margin / 2,
                },
                contactsLabel: {
                    top: margin + bounds.height * (23 / 100),
                    left: bounds.left - this.contactsLabel.nativeElement.clientWidth - margin / 2,
                },
                sidebarContentLabel: {
                    top: margin + bounds.height * (40 / 100),
                    left: bounds.left - this.sidebarContentLabel.nativeElement.clientWidth - margin / 2,
                },
                mainContentLabel: {
                    top: margin + bounds.height * (40 / 100),
                    left: bounds.left + bounds.width - margin,
                },
            };

            this.headingLabel.nativeElement.style.top = `${position.headingLabel.top}px`;
            this.headingLabel.nativeElement.style.left = `${position.headingLabel.left}px`;
            this.contactsLabel.nativeElement.style.top = `${position.contactsLabel.top}px`;
            this.contactsLabel.nativeElement.style.left = `${position.contactsLabel.left}px`;
            this.sidebarContentLabel.nativeElement.style.top = `${position.sidebarContentLabel.top}px`;
            this.sidebarContentLabel.nativeElement.style.left = `${position.sidebarContentLabel.left}px`;
            this.mainContentLabel.nativeElement.style.top = `${position.mainContentLabel.top}px`;
            this.mainContentLabel.nativeElement.style.left = `${position.mainContentLabel.left}px`;
        });
    }
}
