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
let destinoExiste = false;
while(contador<3){

    if(listasDeDestinos[contador] == Destino){
        console.log("Destino existe");
        destinoExiste = true;
        break;
    } 

    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
} else{
    console.log("Desculpe tivemos um erro!");
}

// for(let cont = 0 ; cont < 3 ; cont++){
//     if(listasDeDestinos[contador] == Destino){
//         destinoExiste = true;
//         break;
//     } 

// }