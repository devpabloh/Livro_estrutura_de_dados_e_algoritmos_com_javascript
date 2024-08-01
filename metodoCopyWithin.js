// O método copyWithin copia uma sequência de valores do array para a posição de um índice de inicio.

let copyArray = [1,2,3,4,5,6];

copyArray.copyWithin(0,3)   // vamos supor que queremos copiar os valores 4,5,6 para as primeiras três posições do Array, podemos usar esse código para obter o resultado.

// podemos passr até 3 valores para o .copywithin sendo o primeiro valor que colocamos é para dizer em qual posição nós queremos copiar, o segundo valor é a partir de onde queremos copiar o array (inicio), o terceiro valor é até aonde nós queremos copiar (Fim).