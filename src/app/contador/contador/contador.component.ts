
// importar Componente
import { Component } from '@angular/core';


// decorador que extrae un componente
@Component({
    selector: 'app-contador',
    template: `

        <h1>{{ titulo }}</h1>

        <h3> La base es: <strong> {{base}} </strong></h3>

        <button (click)="acumular(base)"> + {{base}} </button>
        <span> {{numero}} </span>
        <button (click)="acumular(- base)"> {{base}} </button>
    	`

})

// Clase con export para usarlo en otro archivo
export class ContadorComponent {
  public titulo: string = 'Contador app';
  numero: number = 10;
  base: number = 5;


  acumular(valor: number) {
    this.numero += valor;
  }

}