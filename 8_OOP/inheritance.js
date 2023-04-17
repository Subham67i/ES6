
//.1 inheritance

// process where one class acquire properties 
// (method and field) from another class

// parent -> child
//  super -> sub
//  base  -> erived

class Car{

    setName(name){
        this.name = name;
    }

    startEngine(){
        console.log(' start engin for' +this.name);

    }
    stopEngine(){
console.log(' engine stopped for' +this.name);

    }

}
class thaar extends Car{
     topSpeed(speed){
        console.log(' top speed for' +this.name+ ' is' +speed);
     }
}
 let myCar = new thaar();
 myCar.setName('subham');
 myCar.startEngine();
 myCar.stopEngine();
 myCar.topSpeed(200)