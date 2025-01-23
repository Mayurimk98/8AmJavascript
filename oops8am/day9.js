
//arrrow function
// let greeting = () => {
//     console.log("good morning all")
// }

// //function declartion
// function greet(){
//     console.log("GM")
// }

// //function expresion
// let init=function(){
//     console.log("Good morning")
// }


//parent window

// let a=10 //block
// console.log(window.a)//undefined

// var a1=20
// console.log(window.a1) //20

//Program 1
// let person = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 26,
//     info: function () {
//         console.log(this==person) //true
//         console.log(this.firstName + this.lastName) //MayuriKatwe


//         function greeting() {
//             console.log(this==window)//true
//             console.log(this.firstName + this.lastName)//undefined+undefined => NaN
//         }
//         greeting()
//     }
// }
// person.info()

//Program 2
// var firstName = "Vaibhav"
// var lastName = "raut"
// let person = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 26,
//     info: function () {
//         console.log(this == person)//true
//         console.log(this.firstName + this.lastName)//MayuriKatwe

//         function greeting() {
//             console.log(this == window)//true
//             console.log(this.firstName + this.lastName)//VaibhavRaut
//         }
//         greeting()
//     }
// }
// person.info()


// let person = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 26,
//     info: function () {
//         console.log(this == person)//true
//         console.log(this.firstName + this.lastName)//mayurikatwe

//         let greeting = function () {
//             console.log(this == window)//true
//             console.log(this.firstName + this.lastName)//NaN
//         }
//         greeting()
//     }
// }
// person.info()


// let person = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 26,
//     info: function () {
//         console.log(this == person)//true
//         console.log(this.firstName + this.lastName)//MayuriKatwe

//         let greeting = () => {
//         console.log(this==person)//true
//             console.log(this.firstName + this.lastName)//MayuriKatwe
//         }
//         greeting()
//     }
// }
// person.info()


let person = {
    firstName: "Mayuri",
    lastName: "Katwe",
    age: 26,
    info: ()=> {
        console.log(this == window)//true
        console.log(this.firstName + this.lastName)//NaN

        let greeting = () => {
        console.log(this==window)//true
            console.log(this.firstName + this.lastName)//Na
        }
        greeting()
    }
}
person.info()


//1 function => function expression
//2 function => arrow function
