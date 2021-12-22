// Decorador
import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {

    nombre: string = 'Iroman';
    edad: number = 45;

    // propiedad 
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    // metodo
    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    // metodo
    cambiarNombre(): void {
        this.nombre = 'Spiderman'
    }

    // metodo
    cambiarEdad(): void {
        this.edad = 30
    }

}