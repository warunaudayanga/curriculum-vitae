import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CVBuilderWizardComponent } from "./system/cv-builder-wizard/cv-builder-wizard.component";
import { CVPrinterComponent } from "./system/cv-printer/cv-printer.component";

const routes: Routes = [
    { path: "", component: CVBuilderWizardComponent },
    { path: "printer", component: CVPrinterComponent },
    { path: ":index", component: CVBuilderWizardComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
