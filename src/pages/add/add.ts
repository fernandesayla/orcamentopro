import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Orcamento } from '../../models/orcamento';
import { OrcamentoProvider }  from '../../providers/orcamento/orcamento';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  form: FormGroup;
  constructor(public navCtrl: NavController,   private formBuilder: FormBuilder, public navParams: NavParams, private orcProv: OrcamentoProvider,  private toast: ToastController) {
    this.orcamento = this.navParams.data.orcamento || { };
      
      this.createForm()
      this.setupPageTitle()
  }

  createForm() {
    this.form = this.formBuilder.group({
      id: [this.orcamento.id],
      data: [this.orcamento.data, Validators.required],
      nome: [this.orcamento.nome, Validators.required],
      email: [this.orcamento.email, Validators.required],
      telefone: [this.orcamento.telefone, Validators.required],
      valor: [this.orcamento.valor, Validators.required],
    });
  }


  private setupPageTitle() {
    this.title = this.navParams.data.orcamento ? 'Alterando orcamento' : 'Novo orcamento';
  }

  save() {
   // console.log("save save");
       
      try{
        this.orcProv.save(this.form.value)
        this.toast.create({ message: 'Orcamento salvo com sucesso.', duration: 3000 }).present();
        this.navCtrl.pop();
      }
      catch(e){
        this.toast.create({ message: 'Erro ao salvar o orcamento.', duration: 3000 }).present();
        console.error(e);
      }
   
    
  }
  
 
  


}
