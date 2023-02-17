import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { HeaderStateModel } from "./header.model";
import { Header } from "./header.actions";

@State<HeaderStateModel>({
    name: "header",
    defaults: {
        name: "",
        title: "",
        includeImage: true,
        image: "",
    },
})
@Injectable()
export class HeaderState {
    @Selector()
    static getHeader(state: HeaderStateModel): HeaderStateModel {
        return state;
    }

    @Action(Header.PatchHeader)
    patchHeader({ patchState }: StateContext<HeaderStateModel>, action: Header.PatchHeader): void {
        patchState(action.payload);
    }

    @Action(Header.SetHeader)
    setHeader({ setState }: StateContext<HeaderStateModel>, action: Header.SetHeader): void {
        setState(action.payload);
    }
}
