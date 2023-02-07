import { AfterViewInit, Component } from "@angular/core";
import { Store } from "@ngxs/store";
import { Header, HeaderStateModel } from "../../../../core/state/header";
import SetHeaderInfo = Header.PatchHeaderInfo;
import { getRootVar } from "../../../../core/utils/utils";

type Changeable = "fontSize" | "imageHeight" | "imageWidth";

@Component({
    selector: "app-cv-heading-editor",
    templateUrl: "./cv-heading-editor.component.html",
    styleUrls: ["./cv-heading-editor.component.scss"],
})
export class CVHeadingEditorComponent implements AfterViewInit {
    header: HeaderStateModel;

    waitTimer?: NodeJS.Timer;

    repeatTimer?: NodeJS.Timer;

    limits?: {
        [key in Changeable]: {
            min: number;
            max: number;
        };
    };

    constructor(private store: Store) {
        this.header = this.store.selectSnapshot(state => state.header);
    }

    ngAfterViewInit(): void {
        this.limits = {
            fontSize: {
                min: 20,
                max: 50,
            },
            imageWidth: {
                min: 120,
                max: getRootVar("--sidebar-width", true) - 100,
            },
            imageHeight: {
                min: 150,
                max: (getRootVar("--sidebar-width", true) - 100) * 1.5,
            },
        };
    }

    setTitle(): void {
        this.store.dispatch(new SetHeaderInfo({ title: this.header.title }));
    }

    setFontSize(): void {
        this.store.dispatch(new SetHeaderInfo({ fontSize: this.header.fontSize }));
    }

    setIncludeImage(): void {
        this.store.dispatch(new SetHeaderInfo({ includeImage: this.header.includeImage }));
    }

    setImage(image: string): void {
        this.header.image = image;
        this.store.dispatch(new SetHeaderInfo({ image: this.header.image }));
    }

    setImageWidth(): void {
        this.store.dispatch(new SetHeaderInfo({ imageWidth: this.header.imageWidth }));
    }

    setImageHeight(): void {
        this.store.dispatch(new SetHeaderInfo({ imageHeight: this.header.imageHeight }));
    }

    click(changeable: Changeable, decrease?: boolean): void {
        clearInterval(this.waitTimer);
        clearInterval(this.repeatTimer);
        if (decrease && this.header[changeable] <= this.limits![changeable].min) {
            return;
        } else if (!decrease && this.header[changeable] >= this.limits![changeable].max) {
            return;
        }
        this.header[changeable] += decrease ? -1 : +1;
        this.store.dispatch(new SetHeaderInfo({ [changeable]: this.header[changeable] }));
    }

    mousedown(changeable: Changeable, decrease?: boolean): void {
        this.waitTimer = setTimeout(() => {
            this.repeatTimer = setInterval(() => {
                if (decrease && this.header[changeable] <= this.limits![changeable].min) {
                    return;
                } else if (!decrease && this.header[changeable] >= this.limits![changeable].max) {
                    return;
                }
                this.header[changeable] += decrease ? -1 : +1;
                this.store.dispatch(new SetHeaderInfo({ [changeable]: this.header[changeable] }));
            }, 50);
        }, 200);
    }

    mouseUp(): void {
        clearInterval(this.waitTimer);
        clearInterval(this.repeatTimer);
    }
}
