let addMebtn = document.querySelector('#addBtn')
console.log(addMebtn)
let ulList = document.querySelector('ul')
console.log(ulList)
let inputBox = document.querySelector('input[type="text"]')
console.log(inputBox)


//step 1

addMebtn.addEventListener('click', function () {
    let inputText = inputBox.value //Grapes
    let newLi = document.createElement('li') //<li></li>
    newLi.textContent = inputText //<li>Grapes</li>
    //Step 3
    createButtons(newLi)
    ulList.appendChild(newLi)
    inputBox.value = ""

})

//Step 4
ulList.addEventListener('click',function(event){
    console.log(event.target.className)
})






//step 2

function createButtons(newLiEle) {
    // <button class="remove">Remove</button>
    //         <button class="up">Up</button>
    //         <button class="down">Down</button> 

    let removeBtn = document.createElement('button') //<button></button>
    removeBtn.textContent = "Remove"//<button>Remove</button>
    removeBtn.className = "remove" //<button class="remove">Remove</button>
    newLiEle.appendChild(removeBtn)

    let upBtn = document.createElement('button')//<button></button>
    upBtn.textContent = "Up"//<button>Up</button>
    upBtn.className = "up"//<button class="up">Up</button>
    newLiEle.appendChild(upBtn)

    let downBtn = document.createElement('button')
    downBtn.textContent = "Down"
    downBtn.className = "down"
    newLiEle.appendChild(downBtn)
}