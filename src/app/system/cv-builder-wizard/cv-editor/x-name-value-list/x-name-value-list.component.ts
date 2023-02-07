import { Component, EventEmitter, Input, Output } from "@angular/core";
import { SectionKeyValueListItem } from "../../../../core/interfaces/section.interfaces";
import { v4 as uuid } from "uuid";

@Component({
    selector: "app-x-name-value-list",
    templateUrl: "./x-name-value-list.component.html",
    styleUrls: ["./x-name-value-list.component.scss"],
})
export class XNameValueListComponent {
    @Input() list?: SectionKeyValueListItem[];

    @Output() listChange: EventEmitter<SectionKeyValueListItem[]> = new EventEmitter<SectionKeyValueListItem[]>();

    addItem(id: string | number): void {
        const index = this.list!.indexOf(this.list!.find(item => item.id === id)!);
        this.list!.splice(index + 1, 0, { id: uuid(), title: "", value: "" });
        this.onChange();
    }

    removeItem(id: string | number): void {
        // eslint-disable-next-line no-alert
        if (confirm("Are you sure you want to delete this item?")) {
            this.list = this.list?.filter(item => item.id !== id);
        }
        this.onChange();
    }

    onChange(): void {
        this.listChange.emit(this.list);
    }
}
