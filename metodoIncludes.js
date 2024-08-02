/* 

O método includes devolve true caso um elemento seja encontrado no array e false caso o contrário.

*/

let numbers = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.log(numbers.includes(10)); // true
console.log(numbers.includes(20)); // false

// Também é possível passar um índice de início, ou seja, a partir de onde queremos que o array comece a pesquisar o valor

console.log(numbers.includes(4, 5)); // o primeiro valor é o que queremos achar, e o segundo valor que passamos é a partir de qual posição queremos começar à procurar.