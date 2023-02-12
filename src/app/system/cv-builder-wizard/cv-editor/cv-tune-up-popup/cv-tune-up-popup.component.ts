import { Component, ElementRef, EventEmitter, HostListener, Output } from "@angular/core";
import { Config, ConfigsStateModel } from "../../../../core/state/configs";
import { Store } from "@ngxs/store";
import { toCamelCase, toTitleCase } from "../../../../core/utils/string.utils";
import { Globals } from "../../../configs/globals";
import { Dynamics, Limits, Section } from "../../../../core/interfaces/system.interfaces";
import { SectionType } from "../../../../core/enums/section-type.enum";
import { SectionSubListType } from "../../../../core/enums/section-list-type.enu";
import PatchConfigs = Config.PatchConfigs;
import PatchDynamics = Config.PatchDynamics;

type Changeable = keyof Omit<
    ConfigsStateModel,
    `${keyof ConfigsStateModel}Min` | `${keyof ConfigsStateModel}Max` | "dynamics"
>;

@Component({
    selector: "app-cv-tune-up-popup",
    templateUrl: "./cv-tune-up-popup.component.html",
    styleUrls: ["./cv-tune-up-popup.component.scss"],
})
export class CVTuneUpPopupComponent {
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

    SectionType = SectionType;

    SubListType = SectionSubListType;

    constructor(private elementRef: ElementRef<HTMLElement>, private store: Store) {
        this.configs = this.store.selectSnapshot(state => state.configs);
        const sections: Section[] = this.store.selectSnapshot(state => state.sections.sections) ?? [];
        const sidebarSections: Section[] = this.store.selectSnapshot(state => state.sidebar.sections) ?? [];

        Object.keys(Globals.DEFAULTS.configs).forEach(key => {
            if (!(key.endsWith("Min") || key.endsWith("Max"))) {
                (this.configs as any)[toCamelCase(key)] ??= (Globals.DEFAULTS.configs as any)[key];
            }
        });

        const dynamics: Dynamics = {};
        [...sections, ...sidebarSections].forEach(section => {
            if (section.type === SectionType.NAME_VALUE_LIST) {
                dynamics[section.id] = { title: section.title, width: 0 };
            } else if (section.list?.some(item => item.type === SectionSubListType.NAME_VALUE_LIST)) {
                section.list?.forEach(item => {
                    if (item.type === SectionSubListType.NAME_VALUE_LIST) {
                        dynamics[item.id] = { title: item.title, width: 0 };
                    }
                });
            }
        });

        const activeDynamicsArr = Object.keys(this.configs.dynamics).filter(key => dynamics[key]);
        let activeDynamics: Dynamics = {};
        activeDynamicsArr.forEach(key => {
            activeDynamics[key] = this.configs.dynamics[key];
        });
        this.configs.dynamics = { ...dynamics, ...activeDynamics };
        this.store.dispatch(new PatchConfigs({ dynamics: activeDynamics }));

        this.limits = {
            mainContentPadding: {
                min: Globals.DEFAULTS.configs.mainContentPaddingMin,
                max: Globals.DEFAULTS.configs.mainContentPaddingMax,
            },
            sidebarPadding: {
                min: Globals.DEFAULTS.configs.sidebarPaddingMin,
                max: Globals.DEFAULTS.configs.sidebarPaddingMax,
            },
            sidebarSpace: {
                min: Globals.DEFAULTS.configs.sidebarSpaceMin,
                max: Globals.DEFAULTS.configs.sidebarSpaceMax,
            },
            headerFontSize: {
                min: Globals.DEFAULTS.configs.headerFontSizeMin,
                max: Globals.DEFAULTS.configs.headerFontSizeMax,
            },
            imageWidth: {
                min: Globals.DEFAULTS.configs.imageWidthMin,
                max: Globals.DEFAULTS.configs.imageWidthMax,
            },
            imageHeight: {
                min: Globals.DEFAULTS.configs.imageHeightMin,
                max: Globals.DEFAULTS.configs.imageHeightMax,
            },
            contactsFontSize: {
                min: Globals.DEFAULTS.configs.contactsFontSizeMin,
                max: Globals.DEFAULTS.configs.contactsFontSizeMax,
            },
            contactsIconSize: {
                min: Globals.DEFAULTS.configs.contactsIconSizeMin,
                max: Globals.DEFAULTS.configs.contactsIconSizeMax,
            },
            contactsSpace: {
                min: Globals.DEFAULTS.configs.contactsSpaceMin,
                max: Globals.DEFAULTS.configs.contactsSpaceMax,
            },
            contactsListSpace: {
                min: Globals.DEFAULTS.configs.contactsListSpaceMin,
                max: Globals.DEFAULTS.configs.contactsListSpaceMax,
            },
            sectionTitleFontSize: {
                min: Globals.DEFAULTS.configs.sectionTitleFontSizeMin,
                max: Globals.DEFAULTS.configs.sectionTitleFontSizeMax,
            },
            sectionTextFontSize: {
                min: Globals.DEFAULTS.configs.sectionTextFontSizeMin,
                max: Globals.DEFAULTS.configs.sectionTextFontSizeMax,
            },
            sectionSubTextFontSize: {
                min: Globals.DEFAULTS.configs.sectionSubTextFontSizeMin,
                max: Globals.DEFAULTS.configs.sectionSubTextFontSizeMax,
            },
            sectionTextLineHeight: {
                min: Globals.DEFAULTS.configs.sectionTextLineHeightMin,
                max: Globals.DEFAULTS.configs.sectionTextLineHeightMax,
            },
            sectionSpace: {
                min: Globals.DEFAULTS.configs.sectionSpaceMin,
                max: Globals.DEFAULTS.configs.sectionSpaceMax,
            },
            sectionItemSpace: {
                min: Globals.DEFAULTS.configs.sectionItemSpaceMin,
                max: Globals.DEFAULTS.configs.sectionItemSpaceMax,
            },
            sectionSeparatorSpace: {
                min: Globals.DEFAULTS.configs.sectionSeparatorSpaceMin,
                max: Globals.DEFAULTS.configs.sectionSeparatorSpaceMax,
            },
            sectionListItemSpace: {
                min: Globals.DEFAULTS.configs.sectionListItemSpaceMin,
                max: Globals.DEFAULTS.configs.sectionListItemSpaceMax,
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

    getDynamicLimitKeys(): Changeable[] {
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

    clickDynamic(key: string | number, decrease?: boolean): void {
        clearInterval(this.waitTimer);
        clearInterval(this.repeatTimer);
        if (decrease && this.configs.dynamics[key].width <= 0) {
            return;
        } else if (!decrease && this.configs.dynamics[key].width >= 100) {
            return;
        }
        this.configs.dynamics[key].width += decrease ? -1 : +1;
        this.store.dispatch(new PatchDynamics({ [key]: this.configs.dynamics[key] }));

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

    mousedownDynamic(key: string | number, decrease?: boolean): void {
        this.waitTimer = setTimeout(() => {
            this.repeatTimer = setInterval(() => {
                if (decrease && this.configs.dynamics[key].width <= 0) {
                    return;
                } else if (!decrease && this.configs.dynamics[key].width >= 100) {
                    return;
                }
                this.configs.dynamics[key].width += decrease ? -1 : +1;
                this.store.dispatch(new PatchDynamics({ [key]: this.configs.dynamics[key] }));
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

    getDynamics(): string[] {
        return Object.keys(this.configs.dynamics);
    }

    removeFormat(title: string): string {
        return title.replace(/<b>|<\/b>|<i>|<\/i>/g, " ");
    }
}
