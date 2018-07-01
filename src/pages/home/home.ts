import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrcamentoProvider } from '../../providers/orcamento/orcamento';
import { Orcamento } from '../../models/orcamento';
import { AddPage } from '../add/add';
import { CallNumber } from '@ionic-native/call-number';
 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  orcamentos: Orcamento[] = new Array();
  total: number = 0
  constructor(public navCtrl: NavController, private orcProv: OrcamentoProvider , private callNumber: CallNumber ) {
    this.orcamentos = orcProv.getAll();
    }
  soma(){
    this.total =  this.orcamentos.reduce((total, currentValue) => total + +currentValue.valor, 0);
  }
  ionViewDidEnter(){
    this.orcamentos = this.orcProv.getAll();
    this.soma()
  }
  edit(orcamento: Orcamento){
    this.navCtrl.push(AddPage, {orcamento: orcamento} );
  }
  add() {
    this.navCtrl.push(AddPage);
  }
  del(key: string) {
    this.orcProv.delete(key);
    this.soma()
  }

  makeCall(telefone: string){
     this.callNumber.callNumber(telefone, true)
     .then(res => console.log('Launched dialer!', res))
     .catch(err => console.log('Error launching dialer', err));
  }

  
}
