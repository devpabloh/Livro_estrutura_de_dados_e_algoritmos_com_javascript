/* 

Convertendo Array em uma string através do método toString() que usamos para exibir todos os elementos do array em uma única string.
Obs: O método join(), é usado para colocar um separador diferente entre os elementos, sendo passado dentro das ().

*/

let numbers = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.log(numbers.toString());

const numbersString = numbers;
console.log(numbersString.join('-'))

/* 

Observação: Isso pode ser útil se precisarmos enviar o conteúdo do array para um servidor ou se esse conteúdo tiver de ser decodificado (conhecendo o separador, a decodificação será mais fácil).

*/