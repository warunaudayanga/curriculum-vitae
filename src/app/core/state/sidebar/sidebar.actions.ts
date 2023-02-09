import { SidebarStateModel } from "./sidebar.model";

export namespace Sidebar {
    export class PatchSidebar {
        static readonly type = "[Patch Sidebar]";

        constructor(public payload: Partial<SidebarStateModel>) {}
    }
    export class SetSidebar {
        static readonly type = "[Set Sidebar]";

        constructor(public payload: SidebarStateModel) {}
    }
}
