import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { SectionsStateModel } from "./sections.model";
import { Sections } from "./sections.actions";

@State<SectionsStateModel>({
    name: "sections",
    defaults: {
        sections: [],
    },
})
@Injectable()
export class SectionsState {
    @Selector()
    static getSections(state: SectionsStateModel): SectionsStateModel {
        return state;
    }

    @Action(Sections.PatchSections)
    patchSections({ patchState }: StateContext<SectionsStateModel>, action: Sections.PatchSections): void {
        patchState(action.payload);
    }

    @Action(Sections.SetSections)
    setSections({ setState }: StateContext<SectionsStateModel>, action: Sections.SetSections): void {
        setState(action.payload);
    }
}
