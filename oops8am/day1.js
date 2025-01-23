let mayuri = {
    firstName: "Mayuri",
    lastName: "Katwe",
    age: 26,
    rollNumber: 56
}

//100 student  100 object

let ram = {
    firstName: "ram",
    lastName: "gupta",
    age: 24,
    rollNumber: 67
}
//mempry, time ,effort

//class => userdefined datatype
//program 1

class Student {
    firstName = undefined
    lastName = undefined
    age = undefined
    rollNumber = undefined
}

let mayuriK = new Student()
console.log(mayuriK)
mayuriK.firstName = "Mayuri"
mayuriK.lastName = "Katwe",
    mayuriK.age = 24
mayuriK.rollNumber = 12
console.log(mayuriK)

//class => constructor => 

class StudentA {
    constructor(firstName, LastName, age, rollNumber) {
        this.firstName = firstName
        this.lastName = LastName
        this.age = age
        this.rollNumber = rollNumber

    }
}
let vaibhav = new StudentA("vaibhav", "rao", 22, 67)
console.log(vaibhav)

let shree = new StudentA("Shree", "kulkarni", 45, 90)
console.log(shree)

//function /methods

// class StudentB {
//     setFirstName(fn) {
//         this.firstName = fn
//     }
//     setLastName(ln) {
//         this.lastName = ln
//     }
//     setAge(ag) {
//         this.age = ag
//     }
//     setRollNumber(rn) {
//         this.rollNumber = rn
//     }
// }
// let yogesh = new StudentB()
// console.log(yogesh)
// yogesh.setFirstName("Yogesh")
// yogesh.setLastName("Goal")
// yogesh.setAge(11)
// yogesh.setRollNumber(23)
// console.log(yogesh)


//set and get keywords

class StudentD {
    set firstName(fn) {
        this.first_Name = fn
    }
    get firstName() {
        return this.first_Name
    }

    set lastName(ln) {
        this.last_Name = ln
    }

    get lastName() {
        return this.last_Name
    }

    set Age(ag) {
        this.age = ag
    }

    get Age() {
        return this.age
    }

    set rollNumber(rn) {
        this.Roll_Number = rn
    }

    get rollNumber() {
        return this.Roll_Number
    }
}

let ganesh=new StudentD()
console.log(ganesh)
ganesh.firstName="Ganesh"
ganesh.lastName="Puri"
ganesh.Age=23
ganesh.rollNumber=56
console.log(ganesh)



