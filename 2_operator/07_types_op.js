// ----------------------- types operators

let firstName = 'subham';
 console.log(typeof firstName);

  console.log(typeof 123);
  console.log(typeof true);

   let lastName = new String ("pal");
   console.log(lastName instanceof String); //true

let num1 = new Number(123)
console.log(num1 instanceof Number);  //true

console.log(typeof "subham");  // return "string"
console.log(typeof 123);      // return "number"
console.log(typeof false);    // return "boolean"
console.log(typeof NaN);         // return "number"
console.log(typeof [1,2,2,4]);      // return "object"
console.log(typeof {name:'peter', age:44}); // returns "object"
console.log(typeof new Date());        // return " object"
console.log(typeof null);            // return "object"
console.log(typeof function () {});  // return "function"
console.log(typeof myClass);        //return "undefined"
