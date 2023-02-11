import { Component, ElementRef, EventEmitter, HostListener, Output } from "@angular/core";
import { Config, ConfigsStateModel } from "../../../../core/state/configs";
import { Store } from "@ngxs/store";
import PatchConfigs = Config.PatchConfigs;
import { toCamelCase, toTitleCase } from "../../../../core/utils/string.utils";
import { Globals } from "../../../configs/globals";
import { Limits } from "../../../../core/interfaces/system.interfaces";

type Changeable = keyof Omit<ConfigsStateModel, `${keyof ConfigsStateModel}Min` | `${keyof ConfigsStateModel}Max`>;

@Component({
    selector: "app-cv-tune-up-popup",
    templateUrl: "./cv-tune-up-popup.component.html",
    styleUrls: ["./cv-tune-up-popup.component.scss"],
})
export class CvTuneUpPopupComponent {
    @Output() onDismiss: EventEmitter<void> = new EventEmitter<void>();

    @Output() reload: EventEmitter<boolean> = new EventEmitter<boolean>();

    opened: boolean = false;

    openTimeout?: NodeJS.Timeout;

    configs: ConfigsStateModel;

    waitTimer?: NodeJS.Timer;

    repeatTimer?: NodeJS.Timer;

    rebuildTimer?: NodeJS.Timer;

    rebuildFinishTimer?: NodeJS.Timer;

    limits: Limits<Changeable>;

    constructor(private elementRef: ElementRef<HTMLElement>, private store: Store) {
        this.configs = this.store.selectSnapshot(state => state.configs);
        Object.keys(Globals.DEFAULTS.CONFIGS).forEach(key => {
            if (!(key.endsWith("Min") || key.endsWith("Max"))) {
                (this.configs as any)[toCamelCase(key)] ??= (Globals.DEFAULTS.CONFIGS as any)[key];
            }
        });
        this.limits = {
            mainContentPadding: {
                min: Globals.DEFAULTS.CONFIGS.MAIN_CONTENT_PADDING_MIN,
                max: Globals.DEFAULTS.CONFIGS.MAIN_CONTENT_PADDING_MAX,
            },
            sidebarPadding: {
                min: Globals.DEFAULTS.CONFIGS.SIDEBAR_PADDING_MIN,
                max: Globals.DEFAULTS.CONFIGS.SIDEBAR_PADDING_MAX,
            },
            sidebarSpace: {
                min: Globals.DEFAULTS.CONFIGS.SIDEBAR_SPACE_MIN,
                max: Globals.DEFAULTS.CONFIGS.SIDEBAR_SPACE_MAX,
            },
            headerFontSize: {
                min: Globals.DEFAULTS.CONFIGS.HEADER_FONT_SIZE_MIN,
                max: Globals.DEFAULTS.CONFIGS.HEADER_FONT_SIZE_MAX,
            },
            imageWidth: {
                min: Globals.DEFAULTS.CONFIGS.IMAGE_WIDTH_MIN,
                max: Globals.DEFAULTS.CONFIGS.IMAGE_WIDTH_MAX,
            },
            imageHeight: {
                min: Globals.DEFAULTS.CONFIGS.IMAGE_HEIGHT_MIN,
                max: Globals.DEFAULTS.CONFIGS.IMAGE_HEIGHT_MAX,
            },
            contactsFontSize: {
                min: Globals.DEFAULTS.CONFIGS.CONTACTS_FONT_SIZE_MIN,
                max: Globals.DEFAULTS.CONFIGS.CONTACTS_FONT_SIZE_MAX,
            },
            contactsIconSize: {
                min: Globals.DEFAULTS.CONFIGS.CONTACTS_ICON_SIZE_MIN,
                max: Globals.DEFAULTS.CONFIGS.CONTACTS_ICON_SIZE_MAX,
            },
            contactsSpace: {
                min: Globals.DEFAULTS.CONFIGS.CONTACTS_SPACE_MIN,
                max: Globals.DEFAULTS.CONFIGS.CONTACTS_SPACE_MAX,
            },
            contactsListSpace: {
                min: Globals.DEFAULTS.CONFIGS.CONTACTS_LIST_SPACE_MIN,
                max: Globals.DEFAULTS.CONFIGS.CONTACTS_LIST_SPACE_MAX,
            },
            sectionTitleFontSize: {
                min: Globals.DEFAULTS.CONFIGS.SECTION_TITLE_FONT_SIZE_MIN,
                max: Globals.DEFAULTS.CONFIGS.SECTION_TITLE_FONT_SIZE_MAX,
            },
            sectionTextFontSize: {
                min: Globals.DEFAULTS.CONFIGS.SECTION_TEXT_FONT_SIZE_MIN,
                max: Globals.DEFAULTS.CONFIGS.SECTION_TEXT_FONT_SIZE_MAX,
            },
            sectionSubTextFontSize: {
                min: Globals.DEFAULTS.CONFIGS.SECTION_SUB_TEXT_FONT_SIZE_MIN,
                max: Globals.DEFAULTS.CONFIGS.SECTION_SUB_TEXT_FONT_SIZE_MAX,
            },
            sectionTextLineHeight: {
                min: Globals.DEFAULTS.CONFIGS.SECTION_TEXT_LINE_HEIGHT_MIN,
                max: Globals.DEFAULTS.CONFIGS.SECTION_TEXT_LINE_HEIGHT_MAX,
            },
            sectionSpace: {
                min: Globals.DEFAULTS.CONFIGS.SECTION_SPACE_MIN,
                max: Globals.DEFAULTS.CONFIGS.SECTION_SPACE_MAX,
            },
            sectionItemSpace: {
                min: Globals.DEFAULTS.CONFIGS.SECTION_ITEM_SPACE_MIN,
                max: Globals.DEFAULTS.CONFIGS.SECTION_ITEM_SPACE_MAX,
            },
            sectionSeparatorSpace: {
                min: Globals.DEFAULTS.CONFIGS.SECTION_SEPARATOR_SPACE_MIN,
                max: Globals.DEFAULTS.CONFIGS.SECTION_SEPARATOR_SPACE_MAX,
            },
            sectionListItemSpace: {
                min: Globals.DEFAULTS.CONFIGS.SECTION_LIST_ITEM_SPACE_MIN,
                max: Globals.DEFAULTS.CONFIGS.SECTION_LIST_ITEM_SPACE_MAX,
            },
        };
    }

    @HostListener("window:click", ["$event"])
    onClick(event: MouseEvent): void {
        if (this.opened && !this.elementRef.nativeElement.contains(event.target as HTMLElement)) {
            this.close();
        }
    }

    getConfigName(key: string): string {
        return toTitleCase(key);
    }

    getLimitKeys(): Changeable[] {
        return Object.keys(this.limits) as Changeable[];
    }

    open(): void {
        this.elementRef.nativeElement.style.display = "block";
        this.openTimeout = setTimeout(() => {
            this.opened = true;
        }, 10);
    }

    close(): void {
        clearTimeout(this.openTimeout);
        this.opened = false;
        this.elementRef.nativeElement.style.display = "none";
        this.onDismiss.emit();
    }

    click(counter: Changeable, decrease?: boolean): void {
        clearInterval(this.waitTimer);
        clearInterval(this.repeatTimer);
        if (decrease && this.configs[counter] <= this.limits![counter].min) {
            return;
        } else if (!decrease && this.configs[counter] >= this.limits![counter].max) {
            return;
        }
        this.configs[counter] += decrease ? -1 : +1;
        this.store.dispatch(new PatchConfigs({ [counter]: this.configs[counter] }));
        this.reBuild();
    }

    mousedown(counter: Changeable, decrease?: boolean): void {
        this.waitTimer = setTimeout(() => {
            this.repeatTimer = setInterval(() => {
                if (decrease && this.configs[counter] <= this.limits![counter].min) {
                    return;
                } else if (!decrease && this.configs[counter] >= this.limits![counter].max) {
                    return;
                }
                this.configs[counter] += decrease ? -1 : +1;
                this.store.dispatch(new PatchConfigs({ [counter]: this.configs[counter] }));
                this.reBuild();
            }, 50);
        }, 200);
    }

    mouseUp(): void {
        clearInterval(this.waitTimer);
        clearInterval(this.repeatTimer);
    }

    reBuild(): void {
        clearTimeout(this.rebuildTimer);
        clearTimeout(this.rebuildFinishTimer);
        this.rebuildTimer = setTimeout(() => {
            this.reload.emit(true);
            this.rebuildFinishTimer = setTimeout(() => {
                this.reload.emit(false);
            });
        }, 2000);
    }
}
