
//MAP ==> key value  any any => object

//Set => datatype => array => unique value collection

let mySet = new Set()
console.log(mySet)

//add()
mySet.add(20)
console.log(mySet)
mySet.add("mayuri")
mySet.add(true)
mySet.add(6789)
mySet.add(20)
mySet.add("mayuri")
console.log(mySet)
let a1 = { a: 10, b: 20 }
mySet.add(a1)
console.log(mySet)

// let a2 = [50, 90, 100]
// mySet.add(a2)
// console.log(mySet)

// //has()
// let y1 = mySet.has(20)
// console.log(y1)

// let y2 = mySet.has(a1)
// console.log(y2)

// let y3 = mySet.has("Mayuri")
// console.log(y3)

// //delete()
// let s1 = mySet.delete("mayuri")
// console.log(s1)
// console.log(mySet)

// mySet.delete(true)
// console.log(mySet)

// //clear()
// mySet.clear()
// console.log(mySet)

//forEach()
// mySet.forEach(function(val){
//     console.log(val)
// })

//for Of

//mySet.keys()  => iterator=>  collection

// for(let d1 of mySet.keys()){
//     console.log(d1)
// }

// for(let d2 of mySet.values()){
//     console.log(d2)
// }

// for(let [d3,d4] of mySet.entries()){
//     console.log(d3,d4)
// }

//size

//console.log(mySet.size)

let arr1 = [20, 60, 67, 89, 40, 20, 30, 20, 30, 50]
let setArray = new Set(arr1)
console.log(setArray)
console.log(Array.from(setArray))

//=========================================================

let mySet1=new Set([120,67,90,"mayuri",false])
console.log(mySet1)






