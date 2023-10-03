
// let marks = [22, 33, 55, 66, 88, 99]
// console.log(typeof marks)

// let obj={
//     firstName:"mayuri",
//     lastName:"katwe",
//     rollNumber:50,
//     age:25
// }

// let obj2=["mayuri","katwe",25,50]

// firstName. lastName, age , rollNumber

//array

// unpacked the pack data
// let marks = [22, 33, 55, 66, 88, 99]

// // let a1=marks[1]
// // console.log(a1) //33

// // let a2=marks[0]
// // let a3=marks[1]
// // let a4=marks[3]
// // let a5=marks[4]
// // let a6=marks[5]
// // console.log(a2)
// // console.log(a3)
// // console.log(a4)
// // console.log(a5)
// // console.log(a6)

// let [s1, s2, s3, s4, s5, s6] = marks
// console.log(s3)

// let [p2,p3,p4,p5] =marks

//object
let car = {
    model: "SUV",
    numberPlate: "5298",
    colour: "White"
}

let { model: m, numberPlate: np, colour: c } = car
console.log("model :" + np)
console.log(m)
console.log(c)

// // let {colour}=car
// // console.log(colour)

//alising

//nested array
//                 0  1  2    0  1   2   3    0    1   2   3
let rollNumber = [[1, 2, 3], [6, 7, 9, 900], [11, 22, 33, 44]]
//                   0           1                 2

console.log(rollNumber[1][1])


let [[s1, s2, s3], [p1, p2, p3, p4], [w1, w2, w3, w4]] = rollNumber
console.log(p4)
console.log(w3)
console.log(s1)

//nested Object

let student = {
    fullName: "RamKrishna",
    marks: {
        math: 20,
        science: 55
    }
}

let { fullName, marks: { math, science } } = student

console.log(science)
console.log(fullName)

//object inside array

let studentOne = [
    {
        firstName: "Mayuri",
        rollNo: 35,
        skill: "JS"
    },
    {
        firstName: "Vaibhav",
        rollNo: 67,
        skill: "Python"
    }
]

//67
let [{ firstName: Fn, rollNo: Rn, skill: Sk }, { firstName: Fn1, rollNo: Rn1, skill: Sk1 }] = studentOne
console.log(Rn1)
console.log(Sk)


//json

//array inside object
// let human={
//     firstName:"Sham",
//     lastName:"Kumar",
//     marks:[22,78,100]
// }

// //100
// let {marks:[aa,aa1,aa2]}=human

// console.log(aa2)

let Person = {
    firstName: "mayuri",
    family: {
        father: "Mahendra",
        mother: "Jaya",
        sister: [
            {
                name1: "Kavari",
                age: 12
            },
            {
                name1: "Reshama",
                age: 20
            },
            {
                name1: "shubhangi",
                age: 32,
                skills: ["HTML,CSS", "JAVASCRIPT"],
                employesDetails: {
                    empID: 2222,
                    salary: 50000
                }
            }

        ]
    }
}