import { Component, ElementRef, EventEmitter, Output } from "@angular/core";
import { Globals } from "../../../configs/globals";
import { Theme, ThemeStateModel } from "../../../../core/state/theme";
import { Store } from "@ngxs/store";
import { hexToHsl, hslLighten, hslString } from "../../../../core/utils/color.utils";
import SetTheme = Theme.SetTheme;

@Component({
    selector: "app-cv-theme-selector",
    templateUrl: "./x-theme-selector.component.html",
    styleUrls: ["./x-theme-selector.component.scss"],
})
export class XThemeSelectorComponent {
    @Output() themeChange: EventEmitter<ThemeStateModel> = new EventEmitter<ThemeStateModel>();

    THEMES = Globals.THEMES;

    theme: ThemeStateModel;

    constructor(private elementRef: ElementRef<HTMLElement>, private store: Store) {
        this.theme = this.store.selectSnapshot(state => state.theme);
    }

    select(theme: ThemeStateModel): void {
        const root = this.elementRef.nativeElement.closest(":root") as HTMLElement;
        root.style.setProperty("--app-primary-color", theme.primaryColor);
        root.style.setProperty("--app-primary-color-hover", hslString(hslLighten(hexToHsl(theme.primaryColor), 10)));
        root.style.setProperty("--app-secondary-color", theme.secondaryColor);
        root.style.setProperty("--app-accent-color", theme.accentColor);
        root.style.setProperty("--app-text-color", theme.textColor);
        root.style.setProperty("--app-separator-color", theme.separatorColor);
        root.style.setProperty("--app-main-link-color", theme.mainLinkColor);
        root.style.setProperty("--app-background-color", theme.backgroundColor);
        this.store.dispatch(new SetTheme(theme));
    }
}
