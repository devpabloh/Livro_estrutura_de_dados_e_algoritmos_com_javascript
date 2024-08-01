// O método Array.of é utilizado para criar um array a partir dos argumentos passados para o método, mas também podemos usar ele para fazer uma cópia de outro array já existente.

// 1 - Crindo outro Array a partir de argumentos passados

let numbers3 = Array.of(1,2,3,4,5,6,7) // aqui criamos um array da mesma forma que criamos um array literal nome = [1,2,3,4,5,6,7]


// 2 - Usando o Array of para fazer uma cópia de outro array

let numbers = [1,2,3,4,5,6,7,8,9,10,11];

let numbers2 = Array.of(numbers);
console.log(numbers2);

let numbersCopy = Array.of(...numbers) // aqui usamos o operador spread operator para realizar o espalhamento do array que está sendo copiado.
console.log(numbersCopy)