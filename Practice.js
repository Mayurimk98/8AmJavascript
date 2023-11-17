
let person = {
    name1: "Mayuri Katwe",
    age: 30,
    address: {
        street: "Devi Road",
        city: "Nashik",
        zip: 422103
    },
    hobbies: ["Reading", "Coding", "writing"]
}

//Nashik, Coding

// let {address:{city},hobbies:[a,b,c]}  = person
// console.log(city)
// console.log(b)

let { name1, age, address: { street, city, zip }, hobbies: [s1, s2, s3] } = person

//=========================================================================================

function example() {
    console.log(x) //o/p  => undefined
    var x = 30
    console.log(x)//o/p => 30
}
example()

//=======================================================================================

function ex1() {
    if (true) {
        let a = 10
        var b = 20
        const c = 30
    }
    //console.log(a)//error ==a is not defined
    console.log(b)//20
    //console.log(c)//error => c is not defined
}
ex1()


//let const ==> block
//var => function

//======================================================================================
//human=window
let human = {
    fn: "Raj",
    ln: "Kumar",
    fullName: () => {
        //this==window
        return (this.fn + this.ln)//NaN
    }
}
console.log(human.fullName())//NaN

let human1 = {
    fn: "Raj",
    ln: "Kumar",
    fullName:function(){
        //this.human1
        return (this.fn + this.ln) 
    }
 
}
console.log(human1.fullName())//NaN


let sum=function(){
    console.log(10+20)
}
sum()
//=====================================

let month=["January","March","April"]
//february

//["January","february","March","April"]==> HW

// console.log(month.shift())
// month.unshift()

