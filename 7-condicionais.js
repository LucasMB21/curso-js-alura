console.log(`Trabalhando com condicionais`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listasDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
console.log("Destinos possíveis:");
console.log(listasDeDestinos);

if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listasDeDestinos.splice(1,1); //removendo item 
} else{
    console.log("Não é maior de idade e não posso vender");
}

console.log(listasDeDestinos);

console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador == 18);
