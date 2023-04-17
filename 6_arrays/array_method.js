

let fruits = ['apple', 'banana','mango'];
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.push('cherry');
console.log(fruits);

fruits.unshift('lemon');
console.log(fruits);

delete fruits[1];
console.log(fruits);

fruits[1] = 'orange';
console.log(fruits);

fruits.splice(1,2);
console.log(fruits);

fruits.splice(1,0, 'mango', 'reaps')
console.log(fruits);

let citrusFruits = fruits.slice(0,2);
console.log(fruits);
console.log(citrusFruits);

//------------------------------

let evenNumbers = [2,4,6,];
let oddNumbers = [1,3,5];
let primeNumbers = [2,3,5];

let numbers = evenNumbers.concat(oddNumbers,primeNumbers);
console.log(numbers);
