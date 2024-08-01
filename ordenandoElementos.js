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