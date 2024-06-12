console.log(`\n Trabalhando com condicionais`);

const listasDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const Destino = "São Paulo";

console.log("\n Destinos possíveis:");
console.log(listasDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
while(contador<3){
    if(listasDeDestinos[contador] == Destino){
        console.log("Destino existe");
    } else{
        console.log("Destino não existe");
    }

    contador += 1;
}