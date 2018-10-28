import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Pagina3Page } from '../pagina3/pagina3';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3: any = Pagina3Page;
  
  mutantes: any[] = [
    {
      nombre: "Magneto",
      poder: "metal control"
    },
    {
      nombre: "Xavier",
      poder: "mentalist"
    },
    {
      nombre: "Gambit",
      poder: "Explosive"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irPagina3( mutante: any ) {
    console.log(mutante)
    this.navCtrl.push( Pagina3Page, { 'personaje': mutante } ); 
  }
}
