import { Component, EventEmitter, Input, Output } from "@angular/core";
import { SectionListItem } from "../../../../core/interfaces/system.interfaces";
import { v4 as uuid } from "uuid";

@Component({
    selector: "app-x-list",
    templateUrl: "./x-list.component.html",
    styleUrls: ["./x-list.component.scss"],
})
export class XListComponent {
    @Input() list?: SectionListItem[];

    @Output() listChange: EventEmitter<SectionListItem[]> = new EventEmitter<SectionListItem[]>();

    addItem(id: string | number): void {
        const index = this.list!.indexOf(this.list!.find(item => item.id === id)!);
        this.list!.splice(index + 1, 0, { id: uuid(), title: "" });
        this.onChange();
    }

    removeItem(id: string | number): void {
        // eslint-disable-next-line no-alert
        if (confirm("Are you sure you want to delete this item?")) {
            this.list = this.list?.filter(item => item.id !== id);
        }
        this.onChange();
    }

    addSubList(id: string | number): void {
        this.list!.find(item => item.id === id)!.list = [{ id: uuid(), title: "" }];
        this.onChange();
    }

    addSubItem(id: string | number, subId: string | number): void {
        const index = this.list!.find(item => item.id === id)!.list!.indexOf(
            this.list!.find(item => item.id === id)!.list!.find(item => item.id === subId)!,
        );
        this.list!.find(item => item.id === id)!.list!.splice(index + 1, 0, { id: uuid(), title: "" });
        this.onChange();
    }

    removeSubItem(id: string | number): void {
        // eslint-disable-next-line no-alert
        if (confirm("Are you sure you want to delete this item?")) {
            this.list = this.list?.map(item => {
                if (item.list) {
                    item.list = item.list.filter(subItem => subItem.id !== id);
                }
                return item;
            });
        }
        this.onChange();
    }

    onChange(): void {
        this.listChange.emit(this.list);
    }
}
