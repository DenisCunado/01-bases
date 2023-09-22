import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  constructor(private DbzService:DbzService){}
  get personajes(){
    return this.DbzService.personajes;
  }
  //@Input() personajes:Personaje[]=[];
  //CTRL + CTO
}
