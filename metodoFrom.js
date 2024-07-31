/* O método Array.from cria outro array a partir de um array existente, também podemos passar uma função para que possamos determinar quais valores queremos mapear para serem copiados nesse novo array. */

let numbers = [1,2,3,4,5,6,7,8,9,10]

let evens = Array.from(numbers, x=> (x % 2 === 0)) 
console.log(evens)