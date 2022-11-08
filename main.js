const scoreEl = document.getElementById("score")
const timeEl = document.getElementById("time")
const squares = document.querySelectorAll(".square")

let result = 0
let position
let currTime = 60

function updateposition(){
    squares.forEach(square =>{
        square.classList.remove("target")
    })

    let newPosi = squares[Math.floor(Math.random()*16)]
    newPosi.classList.add("target")
    position = newPosi.id
}

let positionID = setInterval(updateposition, 800)
let timeID= setInterval(countDown, 1000)

squares.forEach(square => {
    square.addEventListener("mousedown", ()=>{
        if(square.id == position){
            result++
            scoreEl.textContent = result
        }
    })
})

function countDown(){
    currTime--
    timeEl.textContent = currTime
    if(currTime==0){
        // alert("Your final score is "+ result)
        displayResults()
        clearInterval(positionID)
        clearInterval(timeID)
    }
}

function displayResults(){
    let display = document.createElement("div")
    document.body.appendChild(display)
    display.classList.add("results")
    
    let message = document.createElement("p")
    display.appendChild(message)
    message.textContent = `Your Final Score is ${result}`

    let btn = document.createElement("button")
    btn.innerHTML = "retry"
    display.appendChild(btn)
    btn.classList.add("retryBtn")
    
    btn.addEventListener("click", ()=>{
        display.remove()
        result = 0
        currTime = 60
        location.reload()
    })
}
