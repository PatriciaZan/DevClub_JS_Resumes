/**Operadores aritmétricos */
/*
 adição         = 5 + 5
 sub            = 20 - 10
 div            = 10 / 2
 multiplicação  = 2 * 5
 resto          = 100 % 10
 incremento     = 9++ 
 decremento     = 11--
 exponencial    = 3**2

*/

/**Operadores de atribuição */
/**
 * Valor da car com outro valor = result += 2
 Atribuição      =
 Adição         +=
 Subtração      -=
 Divisão        /=
 Multiplicação  *=
 Resto          %=
 */

/**Operadores de comparação */
/**
 * 
 Igual, compara apenas valor             ==
 Totalmente igual, comapra valor e tipo  ===
 
 Diferente, compara apenas valor              !=
 Totalmente Diferente, compara valor e tipo   !==

 Maior > 
 Menor <
 Maior ou Igual >=
 Menor ou Igual <=
 */

 /**Operadores lógicos */
 /**
  && E AND
    true  && true  = true
    true  && false = false
    false && false = false

  || OU OR
    true  || true  = true
    true  || false = true
    false || false = false

   ! negação
     !true  = false
     !false = true
  */

 /**Operadores Type of and delete */
 /**
 typeof = retorna o tipo do dado
    conosle.log(typeof var
    )
 delete = deleta o dado/parametros
 */

/**Else if */
/**
 IF(SE)
 Else(SE NÃO)
 Else if
 */

 /**Operadores ternário */
 /**
  condição ? se verdadeiro : se falso

  condição && outra condição(v)

  elseif
  condição ? v : outra condição ? v : f
  */

  /**Controlador de fluxo Switch case */

  const temp = 30;
  switch(temp){
    case 10:
        console.log("Ta meio frio");
        break
    case 20:
        console.log("Ta meio quente");
        break
    case 30:
        console.log("Ta quente");
        break
    default:
        console.log("Não sei dizer");
        break
  }


 /**Contadores */
 /**
  *setTimeout executa apenas uma vez
  
  *setInterval executa infinitas vezes

  *clearInterval pausa o setInterval
 */

  setTimeout(function() {
    alert("Executei")
  }, 3000) // milisegundos

  let number = 0;
  setInterval(function(){
    //realiza infinitamente
  }, 1000)


  /*//////////////ESTRUTURAS DE REPETIÇÃO //////////////////// */
  /**FOR */
  /*
    for(INICIALIZAÇÃO; CONDIÇÃO; EXPRESSÃO FINAL){

    }
  */

    for(let i = 0; i < 15; i++){
      console.log(i);
    }

const user = ["Maria", "Aline", "João", "Carolina"]

for(let i = 0; i < user.length; i++){
  console.log(user[i]);
}

/*FOR OF */
const myName = 'Patricia';
const users = ['João', 'Maria', 'Letícia'];

// irá iterar por todos os elementos até o final, sem precisar de uma condição para parar.
for(const letter of myName){
  console.log(letter);
  
}

/*FOR IN */
// iterar objetos
const users2 = {name: 'Patricia', age: 23, street: 'Rua aleatória'};

console.log(users2.name);
console.log(users2['name']);



for (const key in users2) {
    console.log(`${key} : ${users2[key]}`);
}
/*WHILE */
/*
let i = 0;
while(i < 10){
  i++
  console.log(i);
}
*/
/*DO WHILE */
/*
let i = 0;
do{
  i++
  console.log(i);
} while(i < 10)
*/

/**FOR EACH */

const usuarios = [
  {name: "Rodolfo", age: 33, number: "(19) 11111-1111"},
  {name: "Paulo", age: 22, number: "(18) 22222-2222"},
  {name: "Aline", age: 11, number: "(17) 33333-3333"},
  {name: "Maria", age: 44, number: "(16) 44444-4444"},
]

usuarios.forEach((item, index, array) => {
  console.log("posição: " + index);
  
  console.log("item " + item);

  console.log("array: " + array);

  console.log(item.name);
  
})

/**FUNCTION */
/**mini proj */
/*
const cart = [10, 244, 99, 2, 20, 33]


cart.forEach(element => {
  if(element > 30) (element * 10) / 100;
  let total = ++element
  element++
  return total;
});
*/
/**Arrow func */

const sayMyName = (parametro) => `Seu nome é ${parametro}`;

console.log(sayMyName('Patricia'));

/**Func Anonimas */
// função sem nome

/**MAP */
// Mapeia o array
// cria um novo array
//  - item por item
//  - index
//  - array completo

const number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const doubleNumbers2 = number2.map(item, index, arrayOriginal => {
  console.log('Itens: ' + item);
  console.log('index: ' + index);
  console.log('Array Original: ' + arrayOriginal);
  
  const newItem = item * 2
  return newItem
})

// or
//const doubleNumbers3 = number2.map((item) => item * 2)

console.log(doubleNumbers2);

/**Desafios */
/*
const list = [
  {name: 'Patricia', vip: true},
  {name: 'Rodolfo',  vip: true},
  {name: 'Bruno',    vip: false},
  {name: 'Maria',    vip: true},
  {name: 'João',     vip: false},
  {name: 'Carla',    vip: false},
  {name: 'Ana',      vip: true},
  {name: 'Juliana',  vip: false},
]

const newList = list.map(user => {
  const newUser = {
    name: user.name,
    braceletColor: user.vib ? 'black' : 'green'
  }
})

console.log(newList);

const students = [
  {name: 'Patricia', testGrade: 7},
  {name: 'Rodolfo',  testGrade: 5},
  {name: 'Bruno',    testGrade: 8},
  {name: 'Maria',    testGrade: 9},
  {name: 'João',     testGrade: 3},
  {name: 'Carla',    testGrade: 2},
  {name: 'Ana',      testGrade: 10},
  {name: 'Juliana',  testGrade: 1},
]

const approved = students.map((student => {
    const newStudent = {
      name: student.name,
      testGrade: student.testGrade,
      approved: student.testGrade >= 5 ? 'aprovado' : 'reprovado'
    }
}))

console.log(approved);
*/


 


