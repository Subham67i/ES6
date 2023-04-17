

// object oriented programing
// 1. encapsulation
// 2. inheritance
// 3. polymorphim
// 4. abstraction 

//1. Encapsulation in javascript is achieved using closures or using private fields

 class Employee{
    setEmpDetails(name,id,phoneNo){
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
    }

    getEmpName(){
        return this.name;
    }
    getEmpid(){
        return this.id;
    }
    getEmpPhoneNo(){
        return this.phoneNo;
    }

 }
 let emp1 = new Employee();
 emp1.setEmpDetails('subham', 66, 534444545);
 console.log(emp1.getEmpName());
 console.log(emp1.getEmpid());
 console.log(emp1.getEmpPhoneNo());