// let human = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 26,
//     display: function () {
//         console.log(this.age)
//     }
// }

//human.display()

// let human = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 26,
//     display: function () {
//         console.log(this.age)
//     }
// }

// console.log(human.display)//print
// human.display()//call


// let add = function () {
//     console.log(20 + 5)
// }
// add()

//=========================================================================

//lexical scope

//parent functio variable are accessible in child function but 
//child function variable are not accessible in parent function varibale


// function add() {
//     let a = 10
//     let b = 20
//     console.log(a + b)//30

//     function add2() {
//         let c = 100
//         let d = 20
//         console.log(c + d) //120
//         console.log(a + b + c + d)//150

//         function add3() {
//             let e = 50
//             let d = 25
//             console.log(e + d + c + b) //195
//         }
//         add3()
//     }
//     add2()

// }
// add()


// function init(){
//     let p=2
//     let q=3
//     console.log(p+q)//5
//     //console.log(q+s) //s is not defined

//     function initOne(){
//         let r=10
//         let s=12
//         console.log(p+q)//5
//     }
//     initOne()
// }

// init()

//========================================================
// let e = 10
// let f = 20

// function display() {
//     let a = 5
//     let b = 2
//     console.log(a + b)//7
//     console.log(e + f)//30

//     function display1() {
//         let c = 30
//         let d = 20
//         let e = 100
//         let f = 50
//         console.log(e + f + a + b)//157
//         console.log(a + b + d)//27

//         function display2() {
//             let e = 400
//             let f = 500
//             console.log(c)//30
//             console.log(e + f)//900
//         }
//         display2()
//     }
//     display1()
// }
// display()

//==================================================

// let e = 10
// let f = 20

// function display() {
//     let a = 5
//     let b = 2
//     console.log(a + b)
//     console.log(e + f)

//     function display1() {
//         let c = 30
//         let d = 20
//         console.log(e + f + a + b)
//         console.log(a + b + d)

//         function display2() {       
//             console.log(c)
//             console.log(e + f)//150
//         }
//         display2()
//     }
//     display1()
// }
// display()