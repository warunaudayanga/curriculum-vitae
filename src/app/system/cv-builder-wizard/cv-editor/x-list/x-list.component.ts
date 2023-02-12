import { Component, EventEmitter, Input, Output } from "@angular/core";
import { SectionListItem } from "../../../../core/interfaces/system.interfaces";
import { v4 as uuid } from "uuid";
import { SectionSubListType } from "../../../../core/enums/section-list-type.enu";
import { Dropdown } from "bootstrap";

@Component({
    selector: "app-x-list",
    templateUrl: "./x-list.component.html",
    styleUrls: ["./x-list.component.scss"],
})
export class XListComponent {
    @Input() list?: SectionListItem[];

    @Output() listChange: EventEmitter<SectionListItem[]> = new EventEmitter<SectionListItem[]>();

    SubListType = SectionSubListType;

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

    addSubList(id: string | number, type: SectionSubListType): void {
        const item = this.list!.find(item => item.id === id)!;
        item.type = type;
        item.list = [{ id: uuid(), title: "" }];
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
                if (!item.list?.length) {
                    item.type = undefined;
                }
                return item;
            });
        }
        this.onChange();
    }

    onChange(): void {
        this.listChange.emit(this.list);
    }

    toggleMenu(dropdown: HTMLButtonElement): void {
        const dropdownMenu = new Dropdown(dropdown);
        dropdownMenu.toggle();
    }

    closeMenu(dropdown: HTMLButtonElement): void {
        const dropdownMenu = new Dropdown(dropdown);
        dropdownMenu.hide();
    }
}
