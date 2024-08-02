/* 

Os métodos find e findIndex recebem uma função de callback, a qual
buscará um valor que satisfaça a condição presente na função de teste
(callback)

*/

let numbers = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function multipleof13 (element, index, array){
    return (element % 13 == 0);
}

console.log(numbers.find(multipleof13)); // devolve o primeiro valor do array que satisfaça a condição proposta.
console.log(numbers.findIndex(multipleof13)); // devolve o indice do primeiro valor do array que satisfaça a condição proposta.

// caso não seja encontrado o valor vai retornar undefined.