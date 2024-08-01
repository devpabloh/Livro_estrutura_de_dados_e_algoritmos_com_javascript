// O método fill preenche o array com um valor

let numbers = [1,2,3,4,5,6,7,8,9,10,11];

let numbersCopy = Array.of(1,2,3,4,5,6); // podemos observar que o tamanho desse Array é 6, que significa que temos 6 posições

console.log(numbersCopy);

// Agora vamos usar o fill

numbersCopy.fill(0); // Quando digitamos esse código percebemos que agora os valores nas 6 posições correspondem a 0

console.log(numbersCopy);

numbersCopy.fill(1, 2); // Também podemos usar o fill para dizer que a partir daquele indice, todos os outros seram aquele valor, passando primeiro o valor, e depois a partir de qual posição que os valores serão esses.

console.log(numbersCopy);

