import { Component, Input } from "@angular/core";
import { SectionType } from "../../../../../core/enums/section-type.enum";
import { Section } from "../../../../../core/interfaces/system.interfaces";
import { trim } from "../../../../../core/utils/utils";
import { ConfigsStateModel } from "../../../../../core/state/configs";
import { Globals } from "../../../../configs/globals";

@Component({
    selector: "app-section",
    templateUrl: "./cv-section.component.html",
    styleUrls: ["./cv-section.component.scss"],
})
export class CVSectionComponent {
    @Input() section?: Section;

    @Input() configs?: ConfigsStateModel;

    CONFIGS = Globals.DEFAULTS.CONFIGS;

    SectionType = SectionType;

    constructor() {}

    setTarget(html?: string): string {
        return html?.replace(/<a /g, "<a target='_blank' ") ?? "";
    }

    trimTitle(html?: string): string {
        return trim(html || "<title>");
    }

    trim(html?: string, placeholder?: boolean): string {
        return trim(this.setTarget(html) || (placeholder ? "&lt;text&gt;" : ""));
    }
}
