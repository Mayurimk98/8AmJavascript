//OOPS

//1. inheritance
//2. encapsulation
//3. abstraction
//4. polymorphism

//codeing => security,reused, maintain

//inheritance

// class GrandFather {
// //     surName = "Mule"
// //     money = 2000
// //     displayMoney() {
// //         console.log(`I have ${this.money}`)
// //     }
// // }

// // class Father extends GrandFather {
// //     //2 property
// //     //1 method
// //     home='shreeGanesh'
// //     displayHome(){
// //         console.log(`i Have my own home name as ${this.home}`)
// //     }
// // }

// // let sandip=new GrandFather()
// // console.log(sandip.surName)
// // console.log(sandip.money)
// // sandip.displayMoney()

// // // sandip.displayHome()

// // let kumar=new Father()
// // console.log(kumar.money)
// // console.log(kumar.surName)
// // console.log(kumar.home)
// // kumar.displayMoney()
// // kumar.displayHome()

// //parnet and child dont have constructir

// class GrandFather {
//     surName = "Mule"
//     money = 2000
//     displayMoney() {
//         console.log(`I have ${this.money}`)
//     }
// }

// class Father extends GrandFather {
//     //2 property
//     //1 method
//     home = 'shreeGanesh'
//     displayHome() {
//         console.log(`i Have my own home name as ${this.home}`)
//     }
// }

// class Son extends Father {
//     //3 property
//     //2 method
//     car = "Audi"
//     displayCar() {
//         console.log(`I have ${this.car}`)
//     }
// }



// let sandip = new GrandFather()
// console.log(sandip.surName)
// console.log(sandip.money)
// sandip.displayMoney()

// // sandip.displayHome()

// let kumar = new Father()
// console.log(kumar.money)
// console.log(kumar.surName)
// console.log(kumar.home)
// kumar.displayMoney()
// kumar.displayHome()


// let ram=new Son()
// ram.displayCar()
// ram.displayHome()
// ram.displayMoney()
// console.log(ram.surName)
// console.log(ram.money)
// console.log(ram.car)


//==========================================================

//parent having constructor and child dobt have constructor

// class GrandFather {
//     constructor(surName, money) {
//         this.surName = surName
//         this.money = money
//     }
//     displayMoney(){
//         console.log(this.money)
//     }
// }

// class Son extends GrandFather{
//     home="shreNivas"
//     displayHome(){
//         console.log(this.home)
//     }
// }

// let waman=new GrandFather("katwe",5000)
// console.log(waman.surName)
// console.log(waman.money)
// waman.displayMoney()

// let mahendra=new Son()
// mahendra.home
// mahendra.surName
// mahendra.money
// mahendra.displayMoney()
// mahendra.displayHome()
//======================================================

//paremt constructor child constructor

class GrandFather {
    constructor(surName, money) {
        this.surName = surName
        this.money = money
    }
    displayMoney(){
        console.log(this.money)
    }
}

class Father extends GrandFather{
    constructor(surName,money,home){
       super(surName,money) 
       this.home=home
    }
    displayHome(){
        console.log(this.home)
    }
}

class Son extends Father{
    constructor(surName,money,home,car){
        super(surName,money,home)
        this.car=car
    }
    displayCar(){
        console.log(this.car)
    }
}




