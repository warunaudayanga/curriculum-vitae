import { Component, ElementRef, EventEmitter, Output } from "@angular/core";
import { Globals } from "../../../configs/globals";
import { Theme, ThemeStateModel } from "../../../../core/state/theme";
import { THEME } from "../../../../core/interfaces/system.interfaces";
import { Store } from "@ngxs/store";
import PatchTheme = Theme.PatchTheme;
import { hexToHsl, hslLighten, hslString } from "../../../../core/utils/color.utils";

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

    select(theme: THEME): void {
        const root = this.elementRef.nativeElement.closest(":root") as HTMLElement;
        root.style.setProperty("--app-primary-color", theme.PRIMARY_COLOR);
        root.style.setProperty("--app-primary-color-hover", hslString(hslLighten(hexToHsl(theme.PRIMARY_COLOR), 10)));
        root.style.setProperty("--app-secondary-color", theme.SECONDARY_COLOR);
        root.style.setProperty("--app-accent-color", theme.ACCENT_COLOR);
        root.style.setProperty("--app-text-color", theme.TEXT_COLOR);
        root.style.setProperty("--app-separator-color", theme.SEPARATOR_COLOR);
        root.style.setProperty("--app-main-link-color", theme.MAIN_LINK_COLOR);
        root.style.setProperty("--app-background-color", theme.BACKGROUND_COLOR);
        this.store.dispatch(
            new PatchTheme({
                name: theme.NAME,
                primaryColor: theme.PRIMARY_COLOR,
                secondaryColor: theme.SECONDARY_COLOR,
                accentColor: theme.ACCENT_COLOR,
                textColor: theme.TEXT_COLOR,
                separatorColor: theme.SEPARATOR_COLOR,
                mainLinkColor: theme.MAIN_LINK_COLOR,
                backgroundColor: theme.BACKGROUND_COLOR,
            }),
        );
    }
}
