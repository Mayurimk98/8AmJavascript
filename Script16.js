// //array methods

// //1. map()

// // let score = [12, 34, 78, 90]
// //+2 => [14, 36, 80, 92]

// // let plus2 = []
// // for (let i = 0; i < score.length; i++) {
// //     //console.log(score[i]+2)
// //     plus2.push(score[i] + 2)
// // }

// // console.log(plus2)

// //map()
// //action => perform action woth each and every element 
// //return ==> new array

// // let plusTwo=score.map(function(element,index,array){
// //     return element+2
// // })
// // console.log(plusTwo)

// // let score = [12, 34, 78, 90]

// // //>50  => [78,90]
// // //filter()
// // //action=> compare element based on given condition and filterout the element
// // //return ==> new array

// // let greater50=score.filter(function(el,inx,arr){
// //     return el>50
// // })
// // console.log(greater50)


// let marks = [40, 50, 100, 20]
// //bank ==> deposite ==> 100, 200, 500, 1000
// //addition

// //reduce()
// //action => return single value by performing action with all element
// //return => single value

// let sum = marks.reduce(function (acc, el, index, arr) {
//     return acc + el
// }, 0)
// console.log(sum)

// let student = ["mayuri", "chinmay", "mahesh", "sarika"]

//Welcome mayuri
//Welcome chinmay
//Welcome Mahesh
//Welcome sarika

// for(let i=0;i<student.length;i++){
//     console.log("Welcome "+student[i])
// }

//forEach()
//action => perform operation with each element
//return => ntg

// student.forEach(function(el,index,arr){
//     console.log("Welcome "+el)
// })


//Some()=> true /false

// let arrayOne=[50,100,12,45,78,90,11,9,5,160]

// //>25  => true
// //>150  ==> true

// let result=arrayOne.some(function(el,index,arr){
//     return el>250
// })
// console.log(result)


//every()
// let arrayOne = [50, 100, 12, 45, 78, 90, 11, 9, 5, 160]
// let res = arrayOne.every(function (el, index, arr) {
//     return el > 2
// })
// console.log(res)


//find()
// let marks = [12, 45, 24, 89, 90, 50, 30]

// //>20
// let result1=marks.find(function(el,index,array){
//     return el>30
// })
// console.log(result1) //45

//findIndex()
let marks = [12, 45, 24, 89, 90, 50, 30]
//            0   1   2   3   4   5   6

let resulOne=marks.findIndex(function(el,index,arr){
    return el>50
})
console.log(resulOne) //3

//map()
//filter()
//reduce()
//forEach()
//some()
//every()
//find()
//findIndex()
