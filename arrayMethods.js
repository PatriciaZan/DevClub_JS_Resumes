/*  ARRAY METHODTS

    - push      -> Adiciona mais um item ao array
    - lenght    -> Mostra o tamanho do array
    - sort      -> Organiza o array
    - delete    -> Deleta o item de uma posição do Array
    - every     -> Testa se todos os lementos do array passam em uma condição
    - some      -> Testa se um elemento do array passa na condição
    - fill      -> Preenche posiçõs do array 
    - find      -> Utilizado para encontrar elementos dentro de um array
    - findIndex -> Encontrar o index do elemento desejado
    - concat    -> Junta dois arrays

    - includes -> Determina se um elemento está contido no array, true|false
    - join     -> Junta todos os elementos de um array

    - slice    -> Retorna um novo array com as informações escolhidas 
        * .slice(posição inicial, posição final)

    - splice   -> Remove ou add elementos em uma posição especifica
        * .splice(1, 0, 'Feb')

    - pop      -> Remove o último elemento de um array
    - shift    -> Remove o primeiro elemento do array

*/

const myArray = [1, 2, 3, 4, 5]
    console.log(`myArray         -> [${myArray}]`);

myArray.push(6)
    console.log(`.push(6)        -> [${myArray}]`);
    console.log(`myArray.length  -> ${myArray.length}`);

const myArray2 = ['limão', 'abóbora', 'caqui']    
myArray2.sort()
    console.log(`myArray2.sort() -> [${myArray2}]`);

delete myArray2[0]
    console.log(`delete          -> [${myArray2}]`);

    console.log(`-------------------------------------`);
    
const users = [
    {name: 'Nico',   credit: 600},
    {name: 'Maria',  credit: 900},
    {name: 'Joana',  credit: 300},
    {name: 'Vaessa', credit: 200},
]

const isTrueEvery = users.every(users => users.credit > 100)
    console.log(`.every()`);
    console.log(`every user have > 100 of credit?: ${isTrueEvery}`);

    const isTrueSome = users.some(users => users.credit > 800)
    console.log(`.some()`);
    console.log(`some users have > 800 of credit?: ${isTrueSome}`);

    console.log(`-------------------------------------`);

const numbers = [1, 2, 3, 4]

numbers.fill('abacate', 0, 2)
    console.log(`.fill(X, 0, 2)  -> [${numbers}]`);

    console.log(`-------------------------------------`);

const users2 = [
    {name: 'Nico',   credit: 600},
    {name: 'Maria',  credit: 900},
    {name: 'Joana',  credit: 300},
    {name: 'Vanessa', credit: 200},
] 
const findAUser = users2.find(user => user.name === 'Maria');
    console.log('.find()');
    console.log(findAUser);

const findIndex = users.findIndex(user => user.name === 'Maria')
    console.log('.findIndex()');
    console.log(findIndex);

    console.log(`-------------------------------------`);

const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']
const arrayNumb1 = [1, 3, 5]
const arrayNumb2 = [2, 4, 6]

const array3 = array1.concat(array2)
    console.log('concat array1 + array2:');
    console.log(array3);
const arrayNumb3 = arrayNumb1.concat(arrayNumb2)
    console.log('concat arrayNumb1 + arrayNumb2:');
    console.log(arrayNumb3);
    
    console.log(`-------------------------------------`);

const elements = ['Fire', 'Air', 'Water']

const myElements = elements.join(' ') // '-' '/' '|'
    console.log(".join(''):");
    console.log(myElements);
    
elements.pop();
    console.log('.pop():');
    console.log(elements);
elements.shift();
    console.log('.shift():');
    console.log(elements);
    
    console.log(`-------------------------------------`);

const numbers2 = ["João", "Maria", "Pedro", "Michele", "Fernando"];
    
const newArrayNumbers2 = numbers2.slice(1, 3)
    console.log('.slice():');
    console.log(newArrayNumbers2);

    console.log(`-------------------------------------`);

const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai']

months.splice(1, 0, 'Feb')
    console.log('slipe(1, 0, "Feb"):');
    console.log(months);

    
    
    
    

    
    
    

