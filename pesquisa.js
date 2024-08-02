// Temos duas opções para pesquisa o método index of, que devolve o índice do primeiro elemento correspondente ao argumento que foi passado, e o lastIndexOf, que devolve o índice do último elemento encontrado, que corresponde ao argumento passado. Quando a gente passar um argumento e ele não existir vamos ter como retorno -1.

let numbers = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

console.log(numbers.indexOf(10)); // saída 9
console.log(numbers.lastIndexOf(100)); // saída -1, porque esse valor não existe no nosso array

