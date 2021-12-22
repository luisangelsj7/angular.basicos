import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";



@NgModule({
    declarations: [
        ContadorComponent,

    ],
    // Cosas visibles afuera
    exports: [
        ContadorComponent
    ],
    imports: [
        // directivas como el *ngIf , *ngFor
        CommonModule
    ]

})


export class ContadorModule { }