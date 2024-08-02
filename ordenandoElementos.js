// Algoritmos de pesquisa e ordenação mais usados

// Sendo um de ordenação e dois métodos de pesquisa

    let numbers = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    numbers.reverse() // Vamos usar o método reverse (método usado para o array ficar de trás para frente), para que o nosso Array fique de trás para frente de uma maneira que ele fique "fora de ordem para que a gente possa ver como funciona a questão da ordenação e pesquisa". 

    console.log(numbers)

    numbers.sort() 

    console.log(numbers)

    function compare (a, b){
        if(a < b){
            return -1
        } else if(a < b){
            return 1
        } else{
            return 0
        }
    }

    console.log(compare())

    // ORDENAÇÃO PERSONALIZADA

    const friends = [
        {name: "John", age: 30},
        {name: "Ana", age: 20},
        {name: "Chris", age:25},
        {name: "Pablo", age:30}
    ];

    function comparePerson (a, b){
        if (a.age < b.age){
            return -1;
        }else if (a.age > b.age){
            return 1;
        }else {
            return 0;
        }
    };

    console.log(friends.sort(comparePerson));

    // Ordenando strings

    /*  
        Por que ana vem depois de John se “a” vem antes no alfabeto? Isso ocorre
        porque o JavaScript compara os caracteres de acordo com o seu valor
        ASCII. Por exemplo, A, J, a e j têm os seguintes valores ASCII decimais: A:
        65, J: 74, a: 97 e j: 106.
        Portanto, J tem um valor menor que a, e, por esse motivo, vem antes no
        alfabeto.
     */

    let names = [ 'ana', 'Ana', 'Jhon', 'jhon'];

    console.log(names.sort());

    /* 
    
    Porém, se passarmos uma compareFunction contendo o código para ignorar a diferença entre letras maiúsculas e minúsculas, a saída obtida será ["Ana", "ana", "john", "John"], assim:

    */

    console.log(names.sort((a,b)=>{
        if(a.toLowerCase() < b.toLowerCase()){
            return -1;
        } else if(a.toLowerCase() > b.toLowerCase()){
            return 1;
        }else {
            return 0;
        }
    }))

    /* 
    
    Para caracteres com acento, podemos usar o método localeCompare também:
    
    */

    const names2 = ['Maève', 'Maeve'];
    console.log(names2.sort((a,b)=>{
        a.localeCompare(b)
    }))