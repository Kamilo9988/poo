class Veiculo{
    constructor(marca,modelo,ano){
        this.marca=marca;
        this.modelo=modelo;
        this.ano=ano;
    }
}
class Carro extends Veiculo{
    constructor(marca,modelo,ano,hp){
        super(marca,modelo,ano);
        this.hp = hp;
    }
}
class Moto extends Veiculo{
    constructor(marca,modelo,ano,cc){
        super(marca,modelo,ano);
        this.cc=cc;
        const cc = prompt("cilindradas da moto");
  const cc = new Moto(cc);
    }
}
let marca = prompt("marca do veículo");
let modelo = prompt("modelo do veículo");
let ano = prompt("ano do veículo");
const Veiculo1 = new Veiculo(marca,modelo,ano);
alert (Veiculo1.marca + "\n" + Veiculo1.modelo + "\n" + Veiculo1.ano);

let opcao = prompt("garagem juca\n1.moto")












