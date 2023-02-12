import { Component } from "@angular/core";
import { Store } from "@ngxs/store";
import { Header, HeaderStateModel } from "../../../../core/state/header";
import PatchHeaderInfo = Header.PatchHeader;
import { Config, ConfigsStateModel } from "../../../../core/state/configs";
import PatchConfig = Config.PatchConfigs;
import { Globals } from "../../../configs/globals";
import { Limits } from "../../../../core/interfaces/system.interfaces";

type Changeable = "headerFontSize" | "imageHeight" | "imageWidth";

@Component({
    selector: "app-cv-heading-editor",
    templateUrl: "./cv-heading-editor.component.html",
    styleUrls: ["./cv-heading-editor.component.scss"],
})
export class CVHeadingEditorComponent {
    header: HeaderStateModel;

    configs: ConfigsStateModel;

    waitTimer?: NodeJS.Timer;

    repeatTimer?: NodeJS.Timer;

    limits: Limits<Changeable>;

    imageFile?: File;

    constructor(private store: Store) {
        this.header = this.store.selectSnapshot(state => state.header);
        this.configs = this.store.selectSnapshot(state => state.configs);
        this.configs.contactsFontSize ??= Globals.DEFAULTS.configs.contactsFontSize;
        this.configs.imageWidth ??= Globals.DEFAULTS.configs.imageWidth;
        this.configs.imageHeight ??= Globals.DEFAULTS.configs.imageHeight;
        this.limits = {
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
        };
    }

    setTitle(): void {
        this.store.dispatch(new PatchHeaderInfo({ title: this.header.title }));
    }

    setFontSize(): void {
        this.store.dispatch(new PatchConfig({ contactsFontSize: this.configs.contactsFontSize }));
    }

    setIncludeImage(): void {
        this.store.dispatch(new PatchHeaderInfo({ includeImage: this.header.includeImage }));
    }

    setImage(base64Image: string): void {
        this.header.image = base64Image;
        this.store.dispatch(new PatchHeaderInfo({ image: this.header.image }));
    }

    setImageWidth(): void {
        this.header.image = "";
        this.store.dispatch(new PatchConfig({ imageWidth: this.configs.imageWidth }));
    }

    setImageHeight(): void {
        this.header.image = "";
        this.store.dispatch(new PatchConfig({ imageHeight: this.configs.imageHeight }));
    }

    click(changeable: Changeable, decrease?: boolean): void {
        clearInterval(this.waitTimer);
        clearInterval(this.repeatTimer);
        if (decrease && this.configs[changeable] <= this.limits![changeable].min) {
            return;
        } else if (!decrease && this.configs[changeable] >= this.limits![changeable].max) {
            return;
        }
        this.configs[changeable] += decrease ? -1 : +1;
        this.store.dispatch(new PatchConfig({ [changeable]: this.configs[changeable] }));
    }

    mousedown(changeable: Changeable, decrease?: boolean): void {
        this.waitTimer = setTimeout(() => {
            this.repeatTimer = setInterval(() => {
                if (decrease && this.configs[changeable] <= this.limits![changeable].min) {
                    return;
                } else if (!decrease && this.configs[changeable] >= this.limits![changeable].max) {
                    return;
                }
                this.configs[changeable] += decrease ? -1 : +1;
                this.store.dispatch(new PatchConfig({ [changeable]: this.configs[changeable] }));
            }, 50);
        }, 200);
    }

    mouseUp(): void {
        clearInterval(this.waitTimer);
        clearInterval(this.repeatTimer);
    }

    onImageSelect(imageFile: File): void {
        this.imageFile = imageFile;
    }
}
