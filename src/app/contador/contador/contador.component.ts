import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1 style = "text-align: center;">Bienvenido a {{titulo}}</h1>
    <button (click) = "acumular(base)"> + {{base}} </button>
    <span>{{numero}}</span>
    <button (click) = "acumular(-base)"> - {{base}} </button>
  `
})
export class contadorcomponent {

  titulo = "Contador APP";
  numero: number = 10;

  base: number = 5;

  acumular(valor:number){
    this.numero += valor;
  }
}