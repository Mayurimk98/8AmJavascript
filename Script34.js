
let student = ["mayuri", "ram", "sham", "gita"]
let student1 = student
student1[1] = "sathish"
console.log(student)

//Spread operator
let num = [11, 22, 33, 44, 55, 66, 77]
function add(a, b, c, d) {
    console.log(a + b + c + d)
}
//add(num[0],num[1],num[2])
add(...num)


let city = ["mumbai", "nashik", "satara"]
// city1 = city//memery => one => 
city1 = [...city] //diff memory
city1[1] = "jalana"
console.log(city)

let a = [1, 2, 3]
let b = [5, 6, 7]
let c = a.concat(b)
console.log(c)
let d = [...a, 100, 200, 300, ...b]
console.log(d)

let obj1 = { fn: "mayuri", ln: "katwe" }
let obj2 = { city: "nashik", rollNo: 34 }
let s1 = { ...obj1, ...obj2 }
console.log(s1)


//rest operator
function addAllEle(...a1) {
    let res = a1.reduce(function (acc, el) {
        return acc + el
    }, 0)
    return res
}
let sum = addAllEle(11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 200)
console.log(sum)

let marks = [23, 56, 78, 90, 100]

let [a1, b1, c1, ...d1] = marks
console.log(a1)
console.log(b1)
console.log(c1)
console.log(d1)//[90,100]


let stud1 = {
    firstName: "mayuri",
    lastName: "Katwe",
    age: 25
}
let { lastName, firstName, ...x1 } = stud1
console.log(lastName)
console.log(x1)



