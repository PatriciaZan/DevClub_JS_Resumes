/*
JSON - JavaScript Object Notation
 - Padrão de troca e armazenamento de informações
 - Leve, para ser enviado e recebido
 - Simples e fácil deentender
 - Derivado do JavaScript
 - Utiliza o formato chave / valor

 {
    "valor": valor,
 }
*/

const user = {
    name: "Patricia",
    age: 23, 
}

// Coverte um Obj JS em um Json
const userJSON = JSON.stringify(user)
console.log(userJSON);

// Converte um JSon para um js obj
JSON.parse()


/**CLASSES */
/*
const person = {
    name: "Patricia",
    age: 23,
    talk: function(){
        console.log(`Hello my name is ${this.name}`);
    }
}
    */

class Person {
    constructor(name, age){
        console.log(`Hello, I'm ${name}`);
        this.name = name;
        this.age = age;
    }
    //name;
    //age;

    talk(){
        console.log(`Hello my name is ${this.name} and I'm ${this.age} years old`);
    }
}

/* With a constructor*/
const newPerson = new Person("Patricia", 23)
newPerson.talk()

//
//const newPerson = new Person()
//newPerson.name = "Patrícia";
//newPerson.age = 23;
//newPerson.talk();

/**THIS */
// Escopo global e local

// Node => module.export
// web => window

const person = {
    name: "Patricia",
    age: 23,
    talk: function(){
        console.log(person.name);
        console.log(this.age);    // está dentro do escolpo local, aponta para o objeto
    }
}

person.talk()

function myFunction(){
    console.log(this);
}

myFunction() // retorna o global -> window

/**VAR X LET X CONST */
// VAR pode ser acessado fora do escopo local.
// LET E CONST não possui acesso fora do escopo local.

// Evitar usar VAR por questões de segurança

function escopos(){
    let myLet = 1;
    const myConst  = 2;
    var myVar = 3;
}

console.log(myVar);

const MyObject = {
    name: "Patricia"
}
// dessa forma pode ser modificado uma propriedade de uma const
MyObject.name = "NovoNome"