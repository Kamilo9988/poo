// Classe Animal
class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    fazerBarulho() {
      console.log("Fazendo barulho genérico");
    }
  }
  
  // Classe Cachorro que herda de Animal
  class Cachorro extends Animal {
    constructor(nome) {
      super(nome);
    }
  
    fazerBarulho() {
      console.log(`${this.nome} diz: woof, woof`);
    }
  }
  
  // Perguntar ao usuário o nome do cachorro
  const nomeDoCachorro = prompt("Qual é o nome do seu cachorro?");
  const meuCachorro = new Cachorro(nomeDoCachorro);
  
  meuCachorro.fazerBarulho();
  