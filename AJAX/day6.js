

function getUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            return res.data
        })
}

function getUserInfo() {
   return  new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Bye")
        }, 2000)
    })
}

//Promise combinators

//Promise.all()  ==> shortcircut at reject state

// async function getUsers() {
//     try {
//         let a = await Promise.all([
//             getUser(1),
//             getUser(2),
//             getUser(3),
//             getUserInfo()
//         ])
//         console.log(a)
//     }
//     catch {
//         console.log("error")
//     }
// }
// getUsers()

//Promise.allsettle() => executed for both resolve and reject

// async function getAlluser(){
//     let a=await Promise.allSettled([
//         getUser(1),
//         getUserInfo(),
//         getUser(2)
//     ])
//     console.log(a)
// }
// getAlluser()

//Promise.race() => whoever reched first give resonse
 
// async function getAlluser(){
//     try{
//         let a=await Promise.race([
//             getUser(1),
//             getUserInfo(),
//             getUser(2),
//         ])
//         console.log(a) 
//     }
//   catch{
//     console.log("Error")
//   }
// }
// getAlluser()

//Promise.any()=> short circuit at first resolve state

async function getAlluser(){
    let a=await Promise.any([
        
        getUserInfo(),
        getUser(2)
    ])
    console.log(a)
}
getAlluser()







