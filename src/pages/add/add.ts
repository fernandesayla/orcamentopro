import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Orcamento } from '../../models/orcamento';
import { OrcamentoProvider }  from '../../providers/orcamento/orcamento';
import { HomePage } from '../home/home';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  orcamento: Orcamento
  title: string
  constructor(public navCtrl: NavController, public navParams: NavParams, private orcProv: OrcamentoProvider) {
    this.orcamento = this.navParams.data || {};
     console.log( this.orcamento);
      this.setupPageTitle()
  }

  private setupPageTitle() {
    this.title = this.navParams.data ? 'Alterando orcamento' : 'Novo orcamento';
  }
 
  save() {
    if(!this.orcamento.id)
      this.orcProv.edit(this.orcamento);
    else
      this.orcProv.save(this.orcamento);
    this.navCtrl.setRoot(HomePage);
    }
  
 
  


}
