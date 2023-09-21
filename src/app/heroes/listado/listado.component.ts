import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes:string[]=['txapote','willyrex','manolo','rubiales'];
  heroeBorrado: string = '';

  borrarHeroe(){
    //this.heroes = [];
    this.heroeBorrado = this.heroes.shift() || '';
    //this.heroeBorrado = this.heroes.pop() || '';
  }
}