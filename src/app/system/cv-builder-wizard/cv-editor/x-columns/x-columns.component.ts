import { AfterViewInit, Component, EventEmitter, Input, Output } from "@angular/core";
import { Column } from "../../../../core/interfaces/system.interfaces";

@Component({
    selector: "app-x-columns",
    templateUrl: "./x-columns.component.html",
    styleUrls: ["./x-columns.component.scss"],
})
export class XColumnsComponent implements AfterViewInit {
    @Input() columns?: [Column, Column];

    @Output() columnsChange: EventEmitter<[Column, Column]> = new EventEmitter<[Column, Column]>();

    columnLines: [string, string] = ["", ""];

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.columnLines = (this.columns?.map(column => this.joinLines(column.lines)) as [string, string]) ?? [
                "",
                "",
            ];
        });
    }

    joinLines(lines: string[]): string {
        let column: string = lines[0] ?? "";
        if (lines.length > 1) {
            column += lines
                .filter((line, i) => i)
                .map(line => `<div>${line}</div>`)
                .join("");
        }
        return column;
    }

    splitToLines(column: string): string[] {
        return column.split(/<div>|<\/div><div>|<\/div>/).filter(x => x !== "");
    }

    onChange(): void {
        this.columns = [
            { lines: this.splitToLines(this.columnLines[0]) },
            { lines: this.splitToLines(this.columnLines[1]) },
        ];
        this.columnsChange.emit(this.columns);
    }
}
