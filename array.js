
let str = '5'
console.log(typeof (str))

let a = 'false'
console.log(typeof a)

let b = 30
console.log(typeof b)

//Array
let a1 = []//array

let b1 = ""

let a2 = [20, 30, 40, "mayuri", true]

let city = ["pune", "mumbai", "nashik", "nagpur"]
//index       0       1          2         3

console.log(city[1])

console.log(city[3])

//javscript object
//object =>
// property
//method
//action
//return 

//human  => object
//gender
//colour
//name
//age
//height
//weight

//method()
//walk()
//study()
//gym()

//study()
//action => learn something, reading, watch
//return=> job, 


let marks = [20, 30, 90, 87, 55, 68, 40]
// index     0   1   2    3   4   5   6
//length     1   2    3   4    5  6   7
console.log(marks[3])

//property => length
console.log(marks.length)//num

//first ele
console.log(marks[0])

//last ele
console.log(marks[marks.length - 1])

//Methods

//1. push()
//action => add ele at last
//Return => total length

// let num = [1, 2, 3, 4, 5]
// let y1 = num.push(900)
// console.log(y1)
// console.log(num)

//2. unshift()
//action => add ele at first
//return => total length
// let y2=num.unshift(100)
// console.log(y2)
// console.log(num)


//3. pop()
//action => last ele remove
//return => removed ele
let num = [1, 2, 3, 4, 5]
// let y3=num.pop()
// console.log(y3)
// console.log(num)

//4. shift()
//action => remove first ele
//return => removed ele
let y4 = num.shift()

console.log(y4)
console.log(num)

let fruits = ["apple", "orange", "banana", "santra", "kiwi"]
//             0          1         2         3          4
//5. includes()
//action => check given ele present in array or not if present true or false
//return => true/false => boolean
let p1 = fruits.includes('Apple')
console.log(p1)

console.log(fruits.includes('santra'))

//6. indexOf()
//action => return the index of given ele if found, if not return -1
//return => number
let u1 = fruits.indexOf('kiwi')
console.log(u1)

//7. flat()

//         0    1   2   0 1 2    0    1
let arr = [[200, 400, 600], [1, 2, 3], [1000, 5000]]
//           0            1        2

console.log(arr[1][2])

let u3 = arr.flat()
console.log(u3[5])

//8. join()
//return => string

let arr1 = ["Mayuri", "mahendra", "katwe"]
//-, @ &
//mayuri-mahendra-katwe
let y6 = arr1.join('@')
console.log(y6)
arr1.pop()
console.log(arr1.join('--'))










