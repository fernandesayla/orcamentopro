import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrcamentoProvider } from '../../providers/orcamento/orcamento';
import { Orcamento } from '../../models/orcamento';
import { AddPage } from '../add/add';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  orcamentos: Orcamento[] = new Array();
  total: number
  constructor(public navCtrl: NavController, private orcProv: OrcamentoProvider) {
    this.orcamentos = orcProv.getAll();
    this.total =  this.orcamentos.reduce((total, currentValue) => total + +currentValue.valor, 0);
  }
   
  edit(orcamento: Orcamento){

    this.navCtrl.push(AddPage, {orcamento: orcamento} );
  }
  add() {
    this.navCtrl.push(AddPage);
  }

  del(key: string) {
    this.orcProv.delete(key);
  }

 

}
