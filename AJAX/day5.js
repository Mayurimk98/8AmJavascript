

//GetUser => getID ==> getinfo

function getUsers(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            return res.data
        })
}

function singleUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            return res.json()
        }).then(function(res){
           return res.data
        })
}


function renderHTML(el){
    document.write(`<h1>${el.id}</h1>`)
    document.write(`<h2>${el.first_name}</h1>`)
    document.write(`<h1>${el.last_name}</h1>`)
    document.write(`<img src=${el.avatar}>`)
}

// getUsers(2)
// .then(function(res){
//     //console.log(res[2].id)
//     return singleUser(res[2].id)
// })
// .then(function(res){
//     //console.log(res)
//     renderHTML(res)
// })

async function listUserInfo(){
  let dataArr=await  getUsers(2)
  let info=await singleUser(dataArr[2].id)
  renderHTML(info)
}
listUserInfo()



