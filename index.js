/*
- Crie uma classe que simule um carro
- Propriedades: Marca, cor, gasolina restante
- Crie um método de dirigir o carro, que vá diminuindo a gasolina gradativamente
- E um de abastecer para aumentar a gasolina quando necessário
*/

class Carro{
    constructor(marca,cor,gasolina){
        this.marca=marca;
        this.cor=cor;
        this.gasolina=gasolina;
    }
    dirigir(){
        this.gasolina -= 10;
        if(this.gasolina<=0){
            console.log("Acabou a gasolina, abasteça!");
        }
    }
    abastecer(quantidade){
        this.gasolina += quantidade;
        console.log(`Você abasteceu ${quantidade}l, seu tanque constém ${this.gasolina}l de gasolina`)
    }
}

let carro=new Carro("Fiat","Vermelho",40);
carro.dirigir();
carro.dirigir();
console.log(carro);

carro.abastecer(50);
console.log(carro);