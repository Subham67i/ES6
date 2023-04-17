// Classes are a template for creating objects. 
// They encapsulate data with code to work on that data.
//  Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.

// class Employee{
      
//     setDetails(name, id){
//         this.name = name;
//         this.id = id
     
//     }
// }
// let emp = new Employee();
// emp.setDetails('subham', 44);
// console.log(emp.name);
// console.log(emp.id);


//-----------------------------------------------


// class Employee{
//     setDetails(name, id){
//         this.name = name;
//         this.id = id;
        
//     }
    
// }
// let emp1 = new Employee();
// emp1.setDetails('subham', 'S346');

//console.log(emp1.name);
//console.log(emp1.id);


//------------------

class Employee{
      
    constructor(name, id){
        this.name = name;
        this.id = id
     
    }
}
let emp1 = new Employee('SUBHAM',222);
let emp2 = new Employee('rahul',444);
console.log(emp1.name);
console.log(emp1.id);

console.log(emp2.name);
console.log(emp2.id);

