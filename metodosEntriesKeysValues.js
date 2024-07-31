let numbers = [1,2,3,4,5,6,7,8,9,10];

let object = [
    {name: "Pablo", idade: 30, profisao: "programador"},
    {name: "Tais", idade: 26, profissao: "professora"}
];

/* ES2015 também introduziu três formas de obter iteradores de um array. */

// 1 - Primeira forma é o método entries, que devolve o iterador que contém pares de chave/valor

let aEntries = numbers.entries();
console.log(aEntries.next().value);
console.log(aEntries.next().value);

//se quisermos outra alternativa para o código antetior, para não precisar ficar escrevendo console.log, para iterar um por um, podemos fazer dessa forma.

aEntries = numbers.entries();
for (const n of aEntries){
    console.log(n)
}  
