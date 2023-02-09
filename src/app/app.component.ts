import { Component, ElementRef } from "@angular/core";
import { ThemeStateModel } from "./core/state/theme";
import { Store } from "@ngxs/store";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    constructor(private elementRef: ElementRef<HTMLElement>, private store: Store) {
        const theme: ThemeStateModel = this.store.selectSnapshot(state => state.theme);
        if (theme) {
            const root = this.elementRef.nativeElement.closest(":root") as HTMLElement;
            root.style.setProperty("--app-primary-color", theme.primaryColor);
            root.style.setProperty("--app-secondary-color", theme.secondaryColor);
            root.style.setProperty("--app-accent-color", theme.accentColor);
            root.style.setProperty("--app-text-color", theme.textColor);
            root.style.setProperty("--app-separator-color", theme.separatorColor);
            root.style.setProperty("--app-main-link-color", theme.mainLinkColor);
        }
    }
}
