import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CVPrinterComponent } from "./system/cv-printer/cv-printer.component";
import { TopShapeComponent } from "./system/cv-builder-wizard/cv-viewer/cv-components/cv-sidebar/shapes/top-shape/top-shape.component";
import { BottomShapeComponent } from "./system/cv-builder-wizard/cv-viewer/cv-components/cv-sidebar/shapes/bottom-shape/bottom-shape.component";
import { CVMainDetailsComponent } from "./system/cv-builder-wizard/cv-viewer/cv-components/cv-main-details/cv-main-details.component";
import { CVSidebarComponent } from "./system/cv-builder-wizard/cv-viewer/cv-components/cv-sidebar/cv-sidebar.component";
import { CVSectionComponent } from "./system/cv-builder-wizard/cv-viewer/cv-components/cv-section/cv-section.component";
import { CVBuilderWizardComponent } from "./system/cv-builder-wizard/cv-builder-wizard.component";
import { StepperComponent } from "./system/cv-builder-wizard/cv-stepper/stepper.component";
import { CVHeadingEditorComponent } from "./system/cv-builder-wizard/cv-editor/cv-heading-editor/cv-heading-editor.component";
import { FormsModule } from "@angular/forms";
import { NgxsModule } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsResetPluginModule } from "ngxs-reset-plugin";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { HeaderState } from "./core/state/header";
import { CvViewerComponent } from "./system/cv-builder-wizard/cv-viewer/cv-viewer.component";
import { CvIntroComponent } from "./system/cv-builder-wizard/cv-intro/cv-intro.component";
import { CVMainContentEditorComponent } from "./system/cv-builder-wizard/cv-editor/cv-main-content-editor/cv-main-content-editor.component";
import { CVContactsEditorComponent } from "./system/cv-builder-wizard/cv-editor/cv-contacts-editor/cv-contacts-editor.component";
import { CVHeadingComponent } from "./system/cv-builder-wizard/cv-viewer/cv-components/cv-heading/cv-heading.component";
import { CVContactsComponent } from "./system/cv-builder-wizard/cv-viewer/cv-components/cv-contacts/cv-contacts.component";
import { ContactsState } from "./core/state/contacts/contacts.state";
import { TagInputComponent } from "./system/cv-builder-wizard/cv-viewer/cv-components/tag-input/tag-input.component";
import { XSectionComponent } from "./system/cv-builder-wizard/cv-editor/x-section/x-section.component";
import { XParagraphComponent } from "./system/cv-builder-wizard/cv-editor/x-paragraph/x-paragraph.component";
import { XListComponent } from "./system/cv-builder-wizard/cv-editor/x-list/x-list.component";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { HttpClientModule } from "@angular/common/http";
import { XEditorComponent } from "./system/cv-builder-wizard/cv-editor/x-editor/x-editor.component";
import { CvPickSectionTypePopupComponent } from "./system/cv-builder-wizard/cv-editor/cv-section-list-editor/cv-pick-section-type-popup/cv-pick-section-type-popup.component";
import { SectionsState } from "./core/state/sections";
import { CvSectionListEditorComponent } from "./system/cv-builder-wizard/cv-editor/cv-section-list-editor/cv-section-list-editor.component";
import { XNameValueListComponent } from "./system/cv-builder-wizard/cv-editor/x-name-value-list/x-name-value-list.component";
import { XColumnsComponent } from "./system/cv-builder-wizard/cv-editor/x-columns/x-columns.component";
import { XSignatureComponent } from "./system/cv-builder-wizard/cv-editor/x-signature/x-signature.component";
import { CvSidebarEditorComponent } from "./system/cv-builder-wizard/cv-editor/cv-sidebar-editor/cv-sidebar-editor.component";
import { SidebarState } from "./core/state/sidebar";
import { CvTuneUpComponent } from "./system/cv-builder-wizard/cv-editor/cv-tune-up/cv-tune-up.component";
import { CvTuneUpPopupComponent } from "./system/cv-builder-wizard/cv-editor/cv-tune-up-popup/cv-tune-up-popup.component";

@NgModule({
    declarations: [
        AppComponent,
        CVPrinterComponent,
        TopShapeComponent,
        BottomShapeComponent,
        CVMainDetailsComponent,
        CVSidebarComponent,
        CVSectionComponent,
        CVBuilderWizardComponent,
        StepperComponent,
        CVHeadingEditorComponent,
        CvViewerComponent,
        CvIntroComponent,
        CVMainContentEditorComponent,
        CVContactsEditorComponent,
        CVHeadingComponent,
        CVContactsComponent,
        TagInputComponent,
        XSectionComponent,
        XParagraphComponent,
        XListComponent,
        XEditorComponent,
        CvPickSectionTypePopupComponent,
        CvSectionListEditorComponent,
        XNameValueListComponent,
        XColumnsComponent,
        XSignatureComponent,
        CvSidebarEditorComponent,
        CvTuneUpComponent,
        CvTuneUpPopupComponent,
    ],
    imports: [
        NgxsStoragePluginModule.forRoot({
            // deserialize: (state) => JSON.parse(atob(state)),
            // serialize: (state) => btoa(JSON.stringify(state)),
        }),
        NgxsModule.forRoot([HeaderState, ContactsState, SectionsState, SidebarState]),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        // NgxsLoggerPluginModule.forRoot(),
        NgxsResetPluginModule.forRoot(),
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        AngularEditorModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}