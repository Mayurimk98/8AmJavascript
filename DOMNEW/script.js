{/* <body>
    <h1>StudentList</h1>
    <ol>
        <li>Mayuri</li>
        <li>Vaibhav</li>
        <li>Prashant</li>
        <li>ram</li>
    </ol>
    <input type="text">
    <button name="btn">Click Me</button>
</body> */}

let btn = document.querySelector('button[name="btn"]')
let inputBox = document.querySelector('input')
let olList = document.querySelector('ol')

btn.addEventListener('click', function () {
    let inputBoxText = inputBox.value//ram
    let newLi=document.createElement('li') //<li></li>
    newLi.textContent=inputBoxText //<li>ram</li>
    olList.appendChild(newLi)
    inputBox.value=""
})