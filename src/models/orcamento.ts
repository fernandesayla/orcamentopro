

export class Orcamento {
    id: string;
    email: string;
    telefone: string;
    nome: string;
    data: string;
    valor: number;
    
    constructor(
      id: string,
      email: string,
      telefone: string,
   
      nome: string,
      data: string,
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
  