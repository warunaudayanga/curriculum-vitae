import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { HeaderStateModel } from "./header.model";
import { Header } from "./header.actions";

@State<HeaderStateModel>({
    name: "header",
    defaults: {
        title: "",
        fontSize: 25,
        includeImage: true,
        image: "assets/images/avatar.jpeg",
        imageWidth: 120,
        imageHeight: 150,
    },
})
@Injectable()
export class HeaderState {
    @Selector()
    static getHeaderDetails(state: HeaderStateModel): HeaderStateModel {
        return state;
    }

    @Action(Header.PatchHeaderInfo)
    patchHeaderInfo({ patchState }: StateContext<HeaderStateModel>, action: Header.PatchHeaderInfo): void {
        patchState(action.payload);
    }
}
