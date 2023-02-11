import { Component, EventEmitter, Input, Output } from "@angular/core";
import { v4 as uuid } from "uuid";
import { THEME } from "../../../../core/interfaces/system.interfaces";

@Component({
    selector: "app-x-theme",
    templateUrl: "./x-theme.component.html",
    styleUrls: ["./x-theme.component.scss"],
})
export class XThemeComponent {
    @Input() active: boolean = false;

    @Input() theme!: THEME;

    @Output() onSelect: EventEmitter<void> = new EventEmitter<void>();

    id: string = uuid();
}
