

export class Orcamento {
    id: string;
    email: string;
    telefone: string;
    nome: string;
    data: Date;
    valor: number;
    
    constructor(
      id: string,
      email: string,
      telefone: string,
   
      nome: string,
      data: Date,
      valor: number
    )
    {
      this.id = id;
      this.email = email;
      this.telefone = telefone;
      this.nome = nome;
      this.data = data;
      this.valor = valor;
    }
  }
  