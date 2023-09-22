import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";
@Injectable()
export class DbzService {
    constructor() {
        console.log('Servicio inicializado');
    }

    private _personajes: Personaje[] = [
        { nombre: 'Goku', poder: 14000 },
        { nombre: 'Vegeta', poder: 7500 },
    ]

    get personajes():Personaje[]{
        return [...this._personajes];
        //Pasa una copia del array, no una referencia.
        //En ts todo se pasa por referencia.
    }

    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);
    }
}