
// let x = 10
// let y = 50
// console.log(x)
// console.log(y)
// console.log(typeof x)

// let z = '10'
// console.log(typeof z)//string

// let s = true
// console.log(typeof s)

// if (5 == 0) {
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }

// let x1 = 90
// let y1 = 60

// // if (x1 > y1) {
// //     console.log('x1 is greater')
// // }
// // else {
// //     console.log('y1 is greater')
// // }

// //ternary opeartor
// //condition ? true: false

// x1 > y1 ? console.log('x1 is greater') : console.log('y1 is greater')

// //problem 2

// let age = 10
// let result = age > 18 ? 'can drive' : "cant drive"
// console.log(result)


//==================================================

//switch case

//problem 1

//switch case without break
// let city = "thane"
// switch (city) {
//     case "Pune":
//         console.log("MH")

//     case "Jaipur":
//         console.log("RJ")

//     case "Indore":
//         console.log("MP")

//     default:
//         console.log('city not found')
// }

//switch case with break

// let city = "Jaipur"
// switch (city) {
//     case "Pune":
//         console.log("MH")
//         break
//     case "Jaipur":
//         console.log("RJ")
//         break
//     case "Indore":
//         console.log("MP")
//         break
//     default:
//         console.log('city not found')
// }

// let city = "kanpur"
// switch (city) {
//     case "Nagpur":
//     case "Wardha":
//         console.log("MH")
//         break
//     case "Kanpur":
//     case "Varanasi":
//         console.log("UP")
//         break
//     case "Jaipur":
//     case "Udaipur":
//         console.log("RJ")
//         break
//     default:
//         console.log('City not match')
// }

// 



let x1 = 900
let y1 = 500
let z1 = 100
let isGreater = true
switch (isGreater) {
    case x1 > y1 && x1 > z1:
        console.log('x1 is greater')
        break

    case y1 > x1 && y1 > z1:
        console.log("y1 is greater")
        break

    default:
        console.log("z1 is greater")
}

//ctrl+/








