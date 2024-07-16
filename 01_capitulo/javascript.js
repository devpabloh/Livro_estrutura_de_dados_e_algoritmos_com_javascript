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
    console.log(i);
}

// While - tradução: enquanto

var p = 0;
while( p < 10){
    console.log(p);
    p++;
}

// do...while - tradução: fazer...enquanto

var t = 0;

do{
    console.log(t);
    t++
}while(t>10);

// FUNÇÕES

function sayHello(){
    console.log("Hello!");
}

// PROGRAMAÇÃO ORIENTADA A OBJETOS EM JAVASCRIPT



// ESCOPO DE VARIÁVEIS COM LET E CONST

let movie = 'Lord of the rings - senhor dos anéis'; // 1 - Nessa linha declaramos uma variável movie cujo valor é lord of the rings, e exibimos o seu valor no console essa variável tem um escopo global.
// var movie = 'batman vs superman';
function starWarsFan(){
    const movie = 'star wars - Guerra nas estrelas'; // 2 - Nessa função também foi declarada uma variável chamada movie, a saída dessa função é Star Wars, porque a variável é de escopo local, o que signigica que ela é válida somente dentro da função / bloco de código
    return movie;
}

function marvelFan(){
    movie = 'The Avangers - Os vingadores'; // 3 - 
    return movie;
}

function blizzardFan(){
    const isFan = true;
    let pharse = 'Warcraft'; // 4 - 
    console.log(`Before if: ${pharse}`);
    if(isFan){
        let pharse = 'initial text'; // 5 - 
        pharse = 'For the horde! - Para a horda!'; // 6 - 
        console.log(`Inside if: ${pharse}`);
    }
    pharse = 'For the Alliance - para a aliança'; // 7 - 
    console.log(`After if: ${pharse}`);
}
console.log(movie);
console.log(starWarsFan());
console.log(marvelFan());
console.log(movie);
blizzardFan();

// FUNÇÕES DE SETA

var circleAreaES5 = function circleArea(r){
    var PI = 3.14;
    var area = PI * r * r;
    return area;
}

//podemos simplificar a sintaxe do código anterior com este código

const circleArea = r =>{
    const PI = 3.14;
    const area = PI * r * r;
    return area;
}
console.log(circleArea(2))

