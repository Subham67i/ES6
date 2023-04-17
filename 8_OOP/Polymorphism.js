// object oriented programming

// poly = many;
// morph = form;
// ploymorphism = many forms

class Animal{
     
    constructor(name){
        this.name = name;
        
    }

    eats(){
        console.log(this.name+ ' eats food');
        
    }
}
class Lion extends Animal{
    eats(){
        super.eats();
        console.log(this.name+ ' eats beef');
    }
}

let murphy = new Lion(' lion');
murphy.eats();
