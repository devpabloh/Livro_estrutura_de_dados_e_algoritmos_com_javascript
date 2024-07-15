var myVariable = 'global';
myOtherVariable = 'global';

function myFunction(){
    var myVariable = 'local';
    return myVariable;
}

function myOtherFunction(){
    myOtherVariable = 'local';
    return myOtherVariable;
}

console.log(myVariable);
console.log(myFunction());
console.log(myOtherVariable);
console.log(myOtherFunction());
console.log(myOtherVariable);

/* OPERADORES */

var num = 0; // {1}
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;
num += 1; // {2}
num -= 2;
num *= 3;
num /= 2;
num %= 3;
console.log('num == 1 : ' + (num == 1)); // {3}
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));
console.log('true && false : ' + (true && false)); // {4}
console.log('true || false : ' + (true || false));
console.log('!true : ' + (!true));

/* ESTRUTURAS DE CONTROLE

São estruturas de controle, as condicionais e os laços de repetição.

*/

// Instruções condicionais (if...else, else...if e switch)

var num = 1;

if (num === 1){
    console.log ('num é igual a 1')
}

var numero = 0;
if (numero === 1){
    console.log('Numero não é igual a 1')
}else{
console.log(`Numero não é igual a 1, o valor do número é ${numero}`)
}

// Instruções condicionais (switch)

var moth = 5;
switch(moth){
    case 1:
        console.log("January - Janeiro")
        break;
    case 2:
        console.log("February - Fevereiro")
        break;
    case 3:
        console.log("March - Março")
        break;
    case 4:
        console.log("April - Abril")
        break;
    default:
        console.log("O mês não é Janeiro, Fevereiro, Março ou Abril.")
}

// Laços de repetição

// For - tradução: para

for(var i = 0; i < 10; i++){
    console.log(i)
}

// While - tradução: enquanto

var p = 0;
while( p < 10){
    console.log(p)
}
