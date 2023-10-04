
let city = "Nashik"

//"kihsaN"

// let str = ""
// for (let i = city.length - 1; i >= 0; i--) {
//     str = str + city[i]
// }
// console.log(str)

//""+k==> k
//k+i=>ki
//ki+h => kih
//kih+s=> kihs
//kihs+a=> kihsa
//kihsa+N=> kihsaN

// let str = ""
// for (let i = city.length - 1; i >= 0; i--) {
//     str = city[i]+str
// }
// console.log(str)

let str=""
for (let i = 0; i < city.length; i++) {
    str = city[i] + str
}
console.log(str)



let student=[
    {
        firstName:"Mayuri",
        lastName:"Katwe",
        age:25,
        city:"Nashik",
        skills:["Javascript","cypress","python"]

    },
    {
        firstName:"Vaibhav",
        lastName:"Raut",
        age:30,
        city:"Jalgoan",
        skills:["SQL","Selenium","MangoDB"]

    }
]

//count number of object present in student

console.log(student.length)

//vaibhav ==> sham
student[1].firstName="Sham"
console.log(student[1])



