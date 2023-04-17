
// ARRAY = to store multiple values in a single variable 

let number = [1,2,3,4,56,];
console.log(number);

let fruits = ['apple', 'banana','mango '];
console.log(fruits);

let car = new Array('bmw','audi','volvo');
console.log(car[1]);
car[1] = 'honda';
console.log(car[1]);

fruits.push('cherry');
console.log(fruits);
console.log(fruits.length);


let x;
for(x in fruits){
    console.log(fruits[x]);
}
for(x of fruits){
    console.log(x);
}