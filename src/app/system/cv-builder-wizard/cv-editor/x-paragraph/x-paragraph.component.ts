import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { XEditorComponent } from "../x-editor/x-editor.component";

@Component({
    selector: "app-x-paragraph",
    templateUrl: "./x-paragraph.component.html",
    styleUrls: ["./x-paragraph.component.scss"],
})
export class XParagraphComponent {
    @ViewChild(XEditorComponent) editor!: XEditorComponent;

    @Input() paragraph?: string;

    @Input() minHeight?: string;

    @Input() multiLine: boolean = false;

    @Output() paragraphChange: EventEmitter<string> = new EventEmitter<string>();

    editParagraph: boolean = false;

    setParagraph(): void {
        this.paragraphChange.emit(this.paragraph);
    }

    showParaInput(): void {
        this.editParagraph = true;
        setTimeout(() => {
            this.editor?.focus();
        });
    }
}
