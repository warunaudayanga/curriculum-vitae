import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { AngularEditorComponent, AngularEditorConfig } from "@kolkov/angular-editor";
import { trim } from "../../../../core/utils/utils";

@Component({
    selector: "app-x-editor",
    templateUrl: "./x-editor.component.html",
    styleUrls: ["./x-editor.component.scss"],
})
export class XEditorComponent implements AfterViewInit {
    @ViewChild(AngularEditorComponent) editor!: AngularEditorComponent;

    @Input() html?: string;

    @Input() multiLine: boolean = false;

    @Output() htmlChange: EventEmitter<string> = new EventEmitter<string>();

    // eslint-disable-next-line @angular-eslint/no-output-native
    @Output() blur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();

    config: AngularEditorConfig = {
        showToolbar: false,
        spellcheck: true,
        editable: true,
        maxHeight: "350px",
        defaultParagraphSeparator: "span",
        toolbarHiddenButtons: [
            [
                "justifyLeft",
                "justifyCenter",
                "justifyRight",
                "justifyFull",
                "indent",
                "outdent",
                "insertUnorderedList",
                "insertOrderedList",
                "heading",
                "fontName",
            ],
            [
                "fontSize",
                "textColor",
                "backgroundColor",
                "customClasses",
                // "link",
                // "unlink",
                "insertImage",
                "insertVideo",
                "insertHorizontalRule",
                // "removeFormat",
                "toggleEditorMode",
            ],
        ],
    };

    ngAfterViewInit(): void {
        this.editor.textArea.nativeElement.addEventListener("blur", (e: FocusEvent) => {
            const clicked = e.relatedTarget as HTMLElement;
            if (document.activeElement !== this.editor.textArea.nativeElement && !clicked?.closest("angular-editor")) {
                this.config.showToolbar = false;
                this.blur.emit(e);
                this.html = trim(this.html || "");
                this.htmlChange.emit(this.html);
            }
        });
        this.editor.textArea.nativeElement.addEventListener("focus", () => {
            this.config.showToolbar = true;
            const editor = this.editor.textArea.nativeElement.closest("angular-editor") as HTMLDivElement;
            const int = setInterval(() => {
                const toolbar = editor.querySelector(".angular-editor-toolbar") as HTMLDivElement;
                if (toolbar) {
                    clearInterval(int);
                    this.editor.textArea.nativeElement.style.paddingTop = toolbar.clientHeight + 10 + "px";
                }
            });
        });
        // this.editor.textArea.nativeElement.addEventListener("keydown", (e: KeyboardEvent) => {
        //     if (e.key === "Enter" && !this.multiLine) {
        //         e.preventDefault();
        //         this.blur.emit();
        //         this.html = trim(this.html || "");
        //         this.htmlChange.emit(this.html);
        //     }
        // });
        this.editor.textArea.nativeElement.addEventListener("paste", (e: ClipboardEvent) => {
            // noinspection JSDeprecatedSymbols
            if (window.document.execCommand) {
                e.preventDefault();
                const text = e.clipboardData?.getData("text/plain").replace(/\r?\n|\r|\t/g, " ");
                if (text) {
                    // noinspection JSDeprecatedSymbols
                    window.document.execCommand("insertText", false, text);
                }
            }
        });
    }

    focus(): void {
        this.editor.focus();
    }

    onHtmlChange(html: string): void {
        this.htmlChange.emit(html);
    }
}
