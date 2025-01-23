
//Program 7

// var a=10
// console.log(a) //10

// {
//     let b=20
// }
// console.log(b) //b is not define

// {
//     const c=70
// }
// console.log(c)

// {
//     var d=100
// }
// console.log(d) //100

//function scope
// function add() {
//     var num = 200
//     console.log(num)//200
// }

// //console.log(num)//num is not defined
// add()
// console.log(num)//num is not defined


// var num=300
// function add2(){
//     var num=20
//     console.log(num)
// }
// console.log(num)
// add2()
// console.log(num)

//300 20 300


// var a=200
// function init(){
//     a=400
//     console.log(a)//400 
// }
// init()
// console.log(a)//400

//Scope => let const block scope  and var function scope

//Update  => update is possible in var let  not for const
// var w1=300
// console.log(w1)//300
// w1=500
// console.log(w1)//500

// let z1=20
// z1=30
// console.log(z1)//30

// const a1=33
// console.log(a1)
// a1=44//error
// console.log(a1)

// let a=10
// let a=10

// const b=20
// const b=20

// var a=20
// var a=33
// console.log(a)


//======================================================================

//function
//function declartion
//function expression
//arrow function

//function declartion
function add() {
    console.log(5 + 10)
}
add()

//function expression
let add1 = function () {
    console.log(5 + 10)
}
add1()

//arrow function
let add2 =()=> {
    console.log(5 + 10)
}
add2()















// function add(para1,par2){
//     //statemennet
// }
// add(arg1,arg2)

