//Javascript

let a = 20
console.log(typeof a)

let b = "minskole"
console.log(typeof b)

//10 
let q1 = 10

//12,34
//array => 
let s1 = [12, 23, 45, 67, "string", true]

let student = ["mayuri", "vaibhav", "prashant", "sayali", "priya"]
//             0         1         2           3       4
//             1          2        3           4        5

//index
//index==> 0

console.log(student[2])

console.log(student[4])


//Object  =>methods , property
//property

//1. length  => number
console.log(student.length)

//methods=> action
//return

//human ==> Object
//method  => talk(), walk(), run(), study()
//property => color, height, weight


//study()
//action => learn, write
//return  => marks, job

//1. push()
//action => add element at last
//return=> new length

// let marks=[12,34,56,78,90]
// //100
// let a1=marks.push(100)
// console.log(a1)//6
// console.log(marks)

//2. unshift()
//action => add element at first
//return  => new length

// let marks=[12,34,56,78,90]
// let a2=marks.unshift(66)
// console.log(a2) //6
// console.log(marks)

//3. pop()
//action => remove element from last
//return => removed element

// let fruit = ["apple", "banana", "orange", "grapes"]
// let a3 = fruit.pop()
// console.log(a3)//grapes
// console.log(fruit)

//4. shift()
//action => removed first ele of array
//return => removed ele
let fruit = ["apple", "banana", "orange", "grapes"]
let a4=fruit.shift()
console.log(a4)
console.log(fruit)

//5. includes()
//action => check whether given ele present in array or not if present true else false
//return => boolean

let score=[12,56,89,44,55]
let a5=score.includes(55)
console.log(a5)

let a6=score.includes(101)
console.log(a6)

//6. indexOf()
//action => check given elemt presnet in array or not if present return index else -1
//return =>  number
let city=["nashik","nashik","mumbai","dhule","mumbai","nashik"]
//         0         1       2        3       4        5
let b1=city.indexOf("Mumbai")
console.log(b1) //-1

let b2=city.indexOf('nashik')
console.log(b2)//0

let b3=city.indexOf("mumbai")
console.log(b3)








//console.log(typeof student) //array  => object