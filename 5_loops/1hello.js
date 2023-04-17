
//for loops----------------------------
let i;
for(i = 1; i <= 5; i++){
    console.log('value of i is :'+i);
} 

//for/in ------------------------

let car = ['bmw', 'audi', 'volvo'];
let x;
for(x in car){
    console.log(car [x]);
}

//for/of ------------------------------

let phone = ['apple', 'samsung', 'oneplus'];
let y;
for(y of phone){
    console.log(y);
}

// while/loops ---------------------------------

 let counter =1;
 while(counter <= 5){
    console.log('counter :' +counter);
    counter=counter+1;
 }

 // do/while -----------------------------------

  counter = 1;
 do{
     console.log('counter value is : '+counter);
     counter++;
 }while(counter <= 5)