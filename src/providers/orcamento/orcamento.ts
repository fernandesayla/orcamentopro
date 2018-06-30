//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orcamento } from '../../models/orcamento';
import { LocalStorageService } from 'angular-2-local-storage';

/*
Generated class for the OrcamentoProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class OrcamentoProvider {
  private orcamentos: Orcamento[] = new Array();
  
  // constructor(public http: HttpClient) {
  constructor(private localStorageService: LocalStorageService) {
    console.log('Hello OrcamentoProvider Provider');
  }
  getAll(): Orcamento[] {
    this.getDb();
    return this.orcamentos;
  }
  private getDb(): void {
    this.orcamentos = [];
    if (this.localStorageService.get("orcamentos") != null)
    {
        this.orcamentos = <Orcamento[]> JSON.parse(<string>this.localStorageService.get("orcamentos"));
    }
  }
  
  save(orcamento: Orcamento): void {

    this.getDb();
    this.orcamentos.push(orcamento);
    this.localStorageService.set("orcamentos", JSON.stringify(this.orcamentos));
  }

  edit(orcamento: Orcamento){
    this.getDb();
    for (var i=0; i < this.orcamentos.length; i++)
    {
      if (this.orcamentos[i].id == orcamento.id)
      {
        this.orcamentos.splice(i, 1);
      }
    }
    this.orcamentos.push(orcamento);
    this.localStorageService.set("orcamentos", JSON.stringify(this.orcamentos));

  }
  
  delete(orcamentoId: string): void {
    for (var i=0; i < this.orcamentos.length; i++)
    {
      if (this.orcamentos[i].id == orcamentoId)
      {
        this.orcamentos.splice(i, 1);
      }
    }
    this.localStorageService.set("orcamentos", JSON.stringify(this.orcamentos));
  }


  
}
