let student = [
    {
        firstName: "Mayuri",
        lastName: "Katwe",
        age: 25,
        city: "Nashik",
        skills: ["Javascript", "cypress", "python", "SQL", "DJANGO"],
        marks: 45 //55
    },
    {
        firstName: "Vaibhav",
        lastName: "Raut",
        age: 12,
        city: "Jalgoan",
        skills: ["SQL", "Selenium"],
        marks: 10 //20
    },
    {
        firstName: "Sweta",
        lastName: "Kulkarni",
        age: 34,
        city: "Sangamner",
        skills: ["Java", "Cypress", "Jmeter", "Manual"],
        marks: 55
    },
    {
        firstName: "Sam",
        lastName: "Jain",
        age: 41,
        city: "Pune",
        skills: ["Java", "Python", "React", "node", "salesforce", "selenium"],
        marks: 30 //40
    },
    {
        firstName: "kumar",
        lastName: "sahu",
        age: 51,
        city: "Pune",
        skills: ["React", "node",'playwrite'],
        marks: 90
    }
]

//marks<50 ==> 10 add  ===> marks>50 => avg 

//step 1
// let less50 = student.filter(function (el) {
//     return el.marks < 50
// })
// //console.log(less50)

// //step 2
// less50.forEach(function (el) {
//     el.marks = el.marks + 10
// })

// //step 3
// let greter50 = student.filter(function (el) {
//     return el.marks > 50
// })

// //step 4
// let sum = greter50.reduce(function (acc, el) {
//     return acc + el.marks
// }, 0)

// //step 5
// let avg = sum / greter50.length
// console.log(avg)

//=========================================================================
//problem 

student.forEach(function(el){
    el.skills.fill("Default",1,el.skills.length-1)
})

console.log(student)


// let arr=[33,55,66,88,99]
// //        0  1   2  3  4

// console.log(arr.fill("mayuri",1,4))



