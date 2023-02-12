import { Component, EventEmitter, Input, Output } from "@angular/core";
import { v4 as uuid } from "uuid";
import { ThemeStateModel } from "../../../../core/state/theme";

@Component({
    selector: "app-x-theme",
    templateUrl: "./x-theme.component.html",
    styleUrls: ["./x-theme.component.scss"],
})
export class XThemeComponent {
    @Input() active: boolean = false;

    @Input() theme!: ThemeStateModel;

    @Output() onSelect: EventEmitter<void> = new EventEmitter<void>();

    id: string = uuid();
}
