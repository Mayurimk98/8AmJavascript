
//Program 1
// class Student {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     displayName() {
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher extends Student {
//     //2 property
//     // 1 methods
//     salary = 2000
//     displaySalary() {
//         console.log(this.salary)
//     }
//     //3 property and 2 method
// }



// let mayuri = new Student("mayuri", "katwe")
// console.log(mayuri)

// let vaibhav = new Teacher("Vaibhav", "patil")
// console.log(vaibhav)

//program 2

// class Student {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     displayName() {
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher extends Student {
//     constructor(firstName, lastName, salary) {
//         super(firstName, lastName)
//         this.salary = salary
//     }
//     displaySalary() {
//         console.log(this.salary)
//     }
// }

// let swapnil = new Teacher("swapnil", "rao", 30000)
// swapnil.displayName()

//Program 3
class GrandFather{
    constructor(fn,ln){
        this.firstName=fn
        this.lastName=ln
    }
    displayGName(){
        console.log(this.firstName+this.lastName)
    }
}

class Father extends GrandFather{
   constructor(fn,ln,ffn) {
    super(fn,ln)
    this.fFirstName=ffn
   }
   displayFName(){
    console.log(this.fFirstName+this.lastName)
   }
}

class Son extends Father{
    //3 property
    //2 method
    constructor(fn,ln,ffn,sfn){
      super(fn,ln,ffn) 
      this.sFirstName=sfn 
    }
    displaySName(){
        console.log(this.sFirstName+this.lastName)
    }
}

let ram=new Son("RamRaja","kumar","mahendra","vaibhav")
ram.displayGName() //RamRajakumar
ram.displayFName()//mahendraKumar
ram.displaySName()//vaibhavKumar


//1 parent
//multiple child







