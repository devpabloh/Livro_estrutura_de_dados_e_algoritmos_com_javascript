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

// FUNÇÕES DE SETA - ARROW FUNCTION

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

// VALORES DEFAULT PARA PARÂMETROS DE FUNÇÕES

// com o ES2015 agora podemos definir valores default para os parâmetros das funções, dessa forma:

function sum(x = 1, y = 2, z = 3){
    return x + y + z;
}

console.log(sum(4, 2)) // aqui podemos ver que estamos passando dois parametros, porém com a atualização do ES2015, mesmo que não passamos o terceiro paramêtro na chamada da função, nós vamos ter o valor que foi definido lá dentros dos parâmetros, que nesse caso é o Z.

// se fossemos declarar como antigamente esse mesmo código seria dessa forma:

function somar(){
    if(x === undefined) x = 1;
    if (y === undefined) y = 2;
    if (z === undefined) z = 3;
    return x + y + z;
}

// DECLARANDO OS OPERADORES DE ESPALHAMENTO E REST



// Classes Javascript

class pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    saudacao(){
        console.log(`Olá, eu sou ${this.nome}, tenho ${this.idade} anos. `);
    }

    aniversario(){
        this.idade += 1;
    }
}
// herança de classes em javascript
class estudante extends pessoa{
    constructor(nome, idade, curso){
        super(nome, idade);
        this.curso = curso;

    }

    saudacao(){
        console.log(`Olá, meu nome é ${this.nome}, eu tenho ${this.idade} anos e estou estudando ${this.curso}.`);
    }
    
}

const estudante1 = new estudante('Pablo Henrique', 30, 'desenvolvimento front-end');
estudante1.saudacao();

class livro {
    constructor(title, paginas, identificacao){
        this.title = title;
        this.paginas = paginas;
        this.identificacao = identificacao;
    }

    imprimir(){
        console.log(`Identificação: ${this.identificacao}, Titulo do livro é ${this.title} e ele possuí ${this.paginas} páginas.`)
    }
}

let book = new livro("Diário de um vampiro", 400, 1 );
book.imprimir();

class livro2 extends livro{
    constructor(title, paginas, identificacao, tecnologia){
        super(title, paginas, identificacao);
        this.tecnologia = tecnologia;
    }

    imprimir(){
        console.log(`Treinado Herança através de classes: identificação do livro: Seu número de identificação é ${this.identificacao} , titulo do livro é ${this.title}, ele possuí ${this.paginas} páginas e que explica sobre a tecnologia ${this.tecnologia}`);
    }
}

let book2 = new livro2 ("La casa de papel", 300, 2, "Javascript");
book2.imprimir();

// Trabalhando com Getters e Setters

class Person {
    constructor(name) {
    this._name = name; // {1}
    }
    get name() { // {2}
    return this._name;
    }
    set name(value) { // {3}
    this._name = value;
    }
    }
    let lotrChar = new Person('Frodo');
    console.log(lotrChar.name); // {4}
    lotrChar.name = 'Gandalf'; // {5}
    console.log(lotrChar.name);
    lotrChar._name = 'Sam'; // {6}
    console.log(lotrChar.name);

    // outro exemplo de get e set

    class Livro {
        constructor(title, paginas, identificacao) {
            this._title = title;  // Propriedade privada por convenção
            this.paginas = paginas;
            this.identificacao = identificacao;
        }
    
        // Getter para 'title'
        get title() {
            return this._title;
        }
    
        // Setter para 'title'
        set title(newTitle) {
            if (typeof newTitle === 'string' && newTitle.length > 0) {
                this._title = newTitle;
            } else {
                console.log('Título inválido. Deve ser uma string não vazia.');
            }
        }
    
        imprimir() {
            console.log(`Identificação: ${this.identificacao}, Título do livro é ${this.title} e ele possui ${this.paginas} páginas.`);
        }
    }
    
    // Criando uma instância da classe 'Livro'
    let meuLivro = new Livro("Diário de um vampiro", 400, 1);
    meuLivro.imprimir();  // Saída: Identificação: 1, Título do livro é Diário de um vampiro e ele possui 400 páginas.
    
    // Usando o getter, lembrando são métodos que obtêm o valor de uma propriedade específica. Eles permitem acessar a propriedade como se fosse um atributo comum, mas na verdade, você está chamando uma função.
    console.log(meuLivro.title);  // Saída: Diário de um vampiro
    
    // Usando o setter, lembrando são métodos que definem o valor de uma propriedade específica. Eles permitem validar ou modificar o valor antes de atribuí-lo à propriedade.
    meuLivro.title = "Novo Título";
    console.log(meuLivro.title);  // Saída: Novo Título
    
    // Tentando definir um título inválido
    meuLivro.title = "";
    // Saída: Título inválido. Deve ser uma string não vazia.
    console.log(meuLivro.title);  // Saída: Novo Título

    // ARRAY

    //Acrescentando elementos na última posição do array

    let numbers = [0,1,2,3,4,5,6,7,8,9];
    numbers.push(10);
    /* console.log(numbers); */

    numbers[numbers.length]= 11;
    console.log(numbers)

    // Acrescentando elementos na primeira posição do Array

    Array.prototype.insertFirstPosition = function(value){
        for(let i = this.length; i >= 0; i--){
            this[i] = this[i-1];
        }
        this[0] = value;
    };
    numbers.insertFirstPosition(-1)

    number.unshift(-2) // Outra forma de adicionar elementos na primeira posição do Array

    // Removendo elementos de um array

    numbers.pop() //para remover um valor do final de um array

    numbers.shift() // remove um elemento do inicio do array

    // Adicionando e removendo elementos de uma posição específica

    numbers.splice(5, 3); // o primeiro valor é a partir de qual indice queremos tirar e o segundo são quantos elementos queremos tirar.
    // Treinando o que aprendi nos arrays
    let numbersArray = [1,2,3,4,5,6,7,8,9]

    numbersArray.push(10); //adicionando valores ao final do arrey
    numbersArray.unshift(-1); // adicionando valores ao inicio de um array
    console.log(numbersArray);


    let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    function isEven(numbers){
        return numbers.map(number => number % 2 === 0);
    };

    console.log(isEven(numbers));

    

    function isEven2(number2){
        
        return console.log(number2)
        
    };

   /*  numbers2.every(isEven2); // itera os elementos do array até que a função devolva false, depois disso ela para.   */
   let numbers2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    numbers2.forEach(numbers2 => console.log(numbers2 % 2 === 0)); // itera os alementos do array até que a função devolva true, depois disso ela para.

    let numbers3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    function isEven3(numbers3){
        return numbers3 % 2 === 0;
    }
    const evenNumbers3 = numbers3.filter(isEven3);

    console.log(evenNumbers3);

    const isEven4 = numbers3 => numbers3 % 2 === 0;
    console.log(some(isEven4))
