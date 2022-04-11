function numeroAleatorio(numero){
    return Math.floor(Math.random()* numero) + 1;
}

console.log(numeroAleatorio(10));
console.log(numeroAleatorio(100));