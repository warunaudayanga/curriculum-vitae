import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { SidebarStateModel } from "./sidebar.model";
import { Sidebar } from "./sidebar.actions";

@State<SidebarStateModel>({
    name: "sidebar",
    defaults: {
        sections: [],
    },
})
@Injectable()
export class SidebarState {
    @Selector()
    static getSidebar(state: SidebarStateModel): SidebarStateModel {
        return state;
    }

    @Action(Sidebar.PatchSidebar)
    patchSidebar({ patchState }: StateContext<SidebarStateModel>, action: Sidebar.PatchSidebar): void {
        patchState(action.payload);
    }
}
