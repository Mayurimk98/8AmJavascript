

//closure

// function add() {
//     let s = 3
//     let v = 2
//     return s + v //close
//     console.log("hello")
//     console.log(5+10)
// }
// let sum=add()
// console.log(sum)
//5
//hello
//15

// function add(){
//     let a=10
//     let b=20
//     return function(){
//         console.log(a+b)
//         console.log("hello")
//         console.log(10+5)
//     }
// }
// let result=add()
// //console.log(result)//function print
// result()

//===============================================================
//let var const

// let x=20
// console.log(x) //20

// x=50 //update
// console.log(x)
// console.log(x)
// console.log(x)
// console.log(x)

// const y=100
// console.log(y)//100

// y=500 //update
// console.log(y)


//scope => let and const having block scope ={}
//Program 1

// {
//     let z = 20
//     console.log(z)//20
// }
// console.log(z)//z is not define

//Program 2
// let y=200 //globle 
// {
//     let y=500
//     console.log(y) //500
// }
// console.log(y)//200

//Program 3
// let x = 900//200
// {

//     console.log(x) //900
//     x = 200
//     console.log(x)//200
// }
// console.log(x)//200

//Program4
// {
//     const x1=60
// }
// console.log(x1) //x1 is not defined



//Program 5
// const p1 = 100
// {
//     const p1 = 200
//     console.log(p1)//200
// }
// console.log(p1)//100

//Program 6
// const k = 55
// {
//     console.log(k)//55
//     k = 700 //error
//     console.log(k)//55
// }
// console.log(k)//55

{
    var a=400
}
console.log(a)














// let x1
// console.log(x1) //undefined
// console.log("hello")


// console.log(x1)
// console.log("h3llo")



















