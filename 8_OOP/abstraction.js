// abstraction 
// 1 hide details 
// 2 show only essentials 

function Employee(name, age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    let monthlyBonus = 5000;

    let calculateFinalSalary = function(){
        let FinalSalary = baseSalary + monthlyBonus;
        console.log('final salary is : '+FinalSalary);
    }

    this.getEmpDetails = function (){
        console.log('Name : '+this.name+' | Age : '+this.age);
        calculateFinalSalary();
    }

}

let emp1 = new Employee('rahul', 30 , 40000);
emp1.getEmpDetails();
