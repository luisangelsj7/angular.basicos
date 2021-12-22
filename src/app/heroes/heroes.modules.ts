import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // Cosas visibles afuera
    exports: [
        ListadoComponent
    ],
    imports: [
        // directivas como el *ngIf , *ngFor
        CommonModule
    ]

})

export class HeroesModule { }