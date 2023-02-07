import { Component, Input } from "@angular/core";
import { SectionType } from "../../../../../core/enums/section-type.enum";
import { Section } from "../../../../../core/interfaces/section.interfaces";
import { trim } from "../../../../../core/utils/utils";

@Component({
    selector: "app-section",
    templateUrl: "./cv-section.component.html",
    styleUrls: ["./cv-section.component.scss"],
})
export class CVSectionComponent {
    @Input() section?: Section;

    SectionType = SectionType;

    trimTitle(html?: string): string {
        return trim(html || "<title>");
    }

    trim(html?: string, placeholder?: boolean): string {
        return trim(html || (placeholder ? "&lt;text&gt;" : ""));
    }
}
