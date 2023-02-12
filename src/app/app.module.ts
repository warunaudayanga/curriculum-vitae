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
import { CVStepperComponent } from "./system/cv-builder-wizard/cv-stepper/cv-stepper.component";
import { CVHeadingEditorComponent } from "./system/cv-builder-wizard/cv-editor/cv-heading-editor/cv-heading-editor.component";
import { FormsModule } from "@angular/forms";
import { NgxsModule } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsResetPluginModule } from "ngxs-reset-plugin";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { HeaderState } from "./core/state/header";
import { CVViewerComponent } from "./system/cv-builder-wizard/cv-viewer/cv-viewer.component";
import { CVThemeEditorComponent } from "./system/cv-builder-wizard/cv-editor/cv-theme-editor/cv-theme-editor.component";
import { CVMainContentEditorComponent } from "./system/cv-builder-wizard/cv-editor/cv-main-content-editor/cv-main-content-editor.component";
import { CVContactsEditorComponent } from "./system/cv-builder-wizard/cv-editor/cv-contacts-editor/cv-contacts-editor.component";
import { CVHeadingComponent } from "./system/cv-builder-wizard/cv-viewer/cv-components/cv-heading/cv-heading.component";
import { CVContactsComponent } from "./system/cv-builder-wizard/cv-viewer/cv-components/cv-contacts/cv-contacts.component";
import { ContactsState } from "./core/state/contacts";
import { TagInputComponent } from "./system/cv-builder-wizard/cv-viewer/cv-components/tag-input/tag-input.component";
import { XSectionComponent } from "./system/cv-builder-wizard/cv-editor/x-section/x-section.component";
import { XParagraphComponent } from "./system/cv-builder-wizard/cv-editor/x-paragraph/x-paragraph.component";
import { XListComponent } from "./system/cv-builder-wizard/cv-editor/x-list/x-list.component";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { HttpClientModule } from "@angular/common/http";
import { XEditorComponent } from "./system/cv-builder-wizard/cv-editor/x-editor/x-editor.component";
import { CVPickSectionTypePopupComponent } from "./system/cv-builder-wizard/cv-editor/cv-section-list-editor/cv-pick-section-type-popup/cv-pick-section-type-popup.component";
import { SectionsState } from "./core/state/sections";
import { CVSectionListEditorComponent } from "./system/cv-builder-wizard/cv-editor/cv-section-list-editor/cv-section-list-editor.component";
import { XNameValueListComponent } from "./system/cv-builder-wizard/cv-editor/x-name-value-list/x-name-value-list.component";
import { XColumnsComponent } from "./system/cv-builder-wizard/cv-editor/x-columns/x-columns.component";
import { XSignatureComponent } from "./system/cv-builder-wizard/cv-editor/x-signature/x-signature.component";
import { CVSidebarEditorComponent } from "./system/cv-builder-wizard/cv-editor/cv-sidebar-editor/cv-sidebar-editor.component";
import { SidebarState } from "./core/state/sidebar";
import { CVTuneUpComponent } from "./system/cv-builder-wizard/cv-editor/cv-tune-up/cv-tune-up.component";
import { CVTuneUpPopupComponent } from "./system/cv-builder-wizard/cv-editor/cv-tune-up-popup/cv-tune-up-popup.component";
import { CVStartComponent } from "./system/cv-builder-wizard/cv-start/cv-start.component";
import { ConfigsState } from "./core/state/configs";
import { ThemeState } from "./core/state/theme";
import { XThemeComponent } from "./system/cv-builder-wizard/cv-editor/x-theme/x-theme.component";
import { XThemeSelectorComponent } from "./system/cv-builder-wizard/cv-editor/x-theme-selector/x-theme-selector.component";
import { CVMainContentTipsComponent } from "./system/cv-builder-wizard/cv-editor/cv-main-content-editor/cv-main-content-tips/cv-main-content-tips.component";
import { CVTuneUpTipsComponent } from "./system/cv-builder-wizard/cv-editor/cv-tune-up/cv-tune-up-tips/cv-tune-up-tips.component";
import { CVPrintTipsComponent } from "./system/cv-printer/cv-print-tips/cv-print-tips.component";
import { CVPrintWarningComponent } from "./system/cv-printer/cv-print-warning/cv-print-warning.component";
import { ImageCropperModule } from "ngx-image-cropper";
import { CvImageCropperComponent } from "./system/cv-builder-wizard/cv-editor/cv-image-cropper/cv-image-cropper.component";
import { SettingsState } from "./core/state/settings";
import { ConfirmationDialogComponent } from "./system/shared/confirmation-dialof/confirmation-dialog.component";
import { AlertDialogComponent } from "./system/shared/alert-dialog/alert-dialog.component";

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
        CVStepperComponent,
        CVHeadingEditorComponent,
        CVViewerComponent,
        CVThemeEditorComponent,
        CVMainContentEditorComponent,
        CVContactsEditorComponent,
        CVHeadingComponent,
        CVContactsComponent,
        TagInputComponent,
        XSectionComponent,
        XParagraphComponent,
        XListComponent,
        XEditorComponent,
        CVPickSectionTypePopupComponent,
        CVSectionListEditorComponent,
        XNameValueListComponent,
        XColumnsComponent,
        XSignatureComponent,
        CVSidebarEditorComponent,
        CVTuneUpComponent,
        CVTuneUpPopupComponent,
        CVStartComponent,
        XThemeComponent,
        XThemeSelectorComponent,
        CVMainContentTipsComponent,
        CVTuneUpTipsComponent,
        CVPrintTipsComponent,
        CVPrintWarningComponent,
        CvImageCropperComponent,
        ConfirmationDialogComponent,
        AlertDialogComponent,
    ],
    imports: [
        NgxsStoragePluginModule.forRoot({
            // deserialize: (state) => JSON.parse(atob(state)),
            // serialize: (state) => btoa(JSON.stringify(state)),
        }),
        NgxsModule.forRoot([
            SettingsState,
            HeaderState,
            ContactsState,
            SectionsState,
            SidebarState,
            ConfigsState,
            ThemeState,
        ]),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        // NgxsLoggerPluginModule.forRoot(),
        NgxsResetPluginModule.forRoot(),
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        AngularEditorModule,
        ImageCropperModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
