import { SidebarStateModel } from "./sidebar.model";

export namespace Sidebar {
    export class PatchSidebar {
        static readonly type = "[Set Sidebar]";

        constructor(public payload: Partial<SidebarStateModel>) {}
    }
}
