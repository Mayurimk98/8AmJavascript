
//single level 
//multilevel

//multiple
//two super class
//one subclass

//hirarichal

//one superclass
//multiple subclass


class Vehical{
    constructor(model,year){
        this.model=model
        this.year=year
    }
    honk(){
        console.log('i m honk method')
    }
}

class Car extends Vehical{
    drive(){
        console.log('this is car drive method')
    }
    //2 property 2 method
}

class Mothorcycle extends Vehical{
    wheelie(){
        console.log('this is mothorcycle wheelie methods')
    }
    //2 property 2 method
}

class Cycle extends Vehical{
    cycling(){
        console.log('this is cycling method')
    }
    //2 property and 2 method
}



let audi=new Car('SUV','1998')
console.log(audi)
audi.honk()
audi.drive()

//==============================================
//whatsapp

//texing 
//multimedia => mutlimedia+texing
//calling=> texing +multimedia


class Whatsapp{
texing(){
    console.log('texing feature')
}
}

class Whatsapp2 extends Whatsapp{
    multiMedia(){
        console.log('multimedia feature')
    }
}

class Whatsapp3 extends Whatsapp2{
    calling(){
        console.log('calling feature')
    }
}

let WApp3 =new Whatsapp3()
WApp3.texing()
WApp3.multiMedia()
WApp3.calling()


