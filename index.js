let mChoice = 0
let player = 0
let machine = 0
let pChoice = ''
const container = document.querySelector("#container")
const btnNewGame = document.querySelector("#newGame")
const btnRock = document.querySelector("#rock")
const btnPaper = document.querySelector("#paper")
const btnScissors = document.querySelector("#scissors")
const score = document.querySelector("#score")
const choice = document.querySelector("#choice")

btnNewGame.addEventListener("click", ()=>{
    player = 0
    machine = 0
    score.textContent = `Player score: ${player} | Machine score: ${machine}`
    choice.style.display = "flex"
    container.innerHTML = `<div id="playerImg"></div>
                            <span></span>
                            <div id="machineImg"></div>`
    window.playerImg = document.querySelector("#playerImg")
    window.machineImg = document.querySelector("#machineImg")
})
btnRock.addEventListener("click", ()=>{
    pChoice = "rock"
    playerImg.innerHTML = `<img src="/images/rock.png" style="transform: rotate(90deg);">`
    machineChoice()
    playRound(pChoice, mChoice)
})
btnPaper.addEventListener("click", ()=>{
    pChoice = "paper"
    playerImg.innerHTML = `<img src="/images/paper.png" style="transform: rotate(90deg);">`
    machineChoice()
    playRound(pChoice, mChoice)
})
btnScissors.addEventListener("click", ()=>{
    pChoice = "scissors"
    playerImg.innerHTML = `<img src="/images/scissors.png" style="transform: rotate(90deg);">`
    machineChoice()
    playRound(pChoice, mChoice)
})
function machineChoice(){
    mChoice = Math.random() * (4 - 1) + 1
    mChoice = Math.trunc(mChoice)
    switch(mChoice){
        case 1:
            mChoice = "rock"
            machineImg.innerHTML = `<img src="/images/rock.png" style="transform: rotate(-90deg) scaleX(-1);">`
            break
        case 2:
            mChoice = "paper"
            machineImg.innerHTML = `<img src="/images/paper.png" style="transform: rotate(-90deg) scaleX(-1);">`
            break
        case 3:
            mChoice = "scissors"
            machineImg.innerHTML = `<img src="/images/scissors.png" style="transform: rotate(-90deg) scaleX(-1);">`
            break
    }
    return mChoice
}
function playRound(pChoice, mChoice){
    switch (pChoice){
    case "rock":
        if (mChoice == "paper"){
            machine++
        } else if (mChoice == "scissors"){
            player++
        }
        break
    case "paper":
        if (mChoice == "scissors"){
            machine++
        } else if (mChoice == "rock"){
            player++
        }
        break
    case "scissors":
        if(mChoice == "rock"){
            machine++
        } else if (mChoice == "paper") {
            player++
        }
    }
    score.textContent = `Player score: ${player} | Machine score: ${machine}`
    if (player == 5){container.innerHTML = `<p style="font-size: 100px;">Player Wins!</p>`; choice.style.display = "none"}
    else if (machine == 5){container.innerHTML = `<p style="font-size: 100px;">Machine Wins!</p>`; choice.style.display = "none"}
}