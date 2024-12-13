/**REDUCE */
/**
 - Retorna um valor (novo array, obj, string, number)
 - Aceita 4 parâmetros
    * acumulador
    * valor atual
    * index
    * array completo
 */
/*
 const listReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 const sum = listReduce.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual
 },0)

 console.log(sum);
 */

 const companies = [
  {name: 'Samsung',   marketValue: 50,  CEO: 'Kim Hyun Suk',    foundedOn: 1938},
  {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella',   foundedOn: 1975},
  {name: 'Intel',     marketValue: 117, CEO: 'Brian Krzanich',  foundedOn: 1968},
  {name: 'Facebook',  marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
  {name: 'Spotify',   marketValue: 30,  CEO: 'Daniel Ek',       foundedOn: 2006},
  {name: 'Apple',     marketValue: 845, CEO: 'Tim Cook',        foundedOn: 1976},
 ]

 const marketValue = companies.reduce((acc, value) => {
  return acc + value.marketValue;
 }, 0)

 //console.log('Market Value: ' + marketValue);


 const cart = [
  { productName: 'Abóbora', valuePerKg: 5,    kg: 1   },
  { productName: 'Pepino',  valuePerKg: 3.55, kg: 1.3 },
  { productName: 'Limão',   valuePerKg: 1.2,  kg: 2   },
  { productName: 'Abacate', valuePerKg: 5.4,  kg: 1.67},
  { productName: 'Morango', valuePerKg: 11.9, kg: 3   },
 ]

 const finalPrice = cart.reduce((acc, value, index) => {
  let finalPrice = acc + (value.valuePerKg * value.kg)
  //console.log('Index: ' + index + ' | ' + value.valuePerKg + ' | ' + value.kg);
  
  return finalPrice
 },0)

 //console.log('Total: ' + finalPrice);

 /**FILTER */
 /**
  - Cria um novo array
  - Cria o array apenas com os elementos filtrados
  - Aceita 3 parâmetros
    * item do array 
    * index
    * array completo
  return true -> item atual passa para novo array
  return false -> item atual NÃO passa para novo array
  */

  const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

//   const newList = list.filter(item => {
//     if(item > 100) return true
//     else return false
//   })

const newList = list.filter(item => item < 100 && item % 2 === 0)
//console.log(newList);
  
const newCompanies = companies.filter(company => company.marketValue < 200 && company.foundedOn > 1990)
//console.log(newCompanies);


// Adicionar 10% de calor de mercado a todas as companhias
// filtrar somente as companhias fundadas abaixo de 1990
// Somar o valor de mercado das restantes



/*
const newCompanyArray = companies.map(company => {
   company.marketValue = company.marketValue + (company.marketValue / 10)

   return company
}).filter(company => company.foundedOn < 1990)
  .reduce((acc, company) =>  acc + company.marketValue, 0)
*/
const add10Percent = (company) => {
    company.marketValue = company.marketValue + (company.marketValue / 10)
    return company
}

const filterCompanies = (company => company.foundedOn < 1990)
const calcTotalvalue = (acc, company) =>  acc + company.marketValue;

const newCompanyArray = companies
    .map(add10Percent)
    .filter(filterCompanies)
    .reduce(calcTotalvalue, 0)


console.log(newCompanyArray);

