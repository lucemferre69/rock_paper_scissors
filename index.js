let mChoice = 0
let hChoice = ""
let player = 0
let machine = 0
function machineChoice(){
    mChoice = Math.random() * (4 - 1) + 1
    mChoice = Math.trunc(mChoice)
    switch(mChoice){
        case 1:
            mChoice = "rock"
            break
        case 2:
            mChoice = "paper"
            break
        case 3:
            mChoice = "scissors"
            break
    }
    return mChoice
}
function humanChoice() {
    hChoice = prompt("Ingrese 'Rock', 'Paper' or 'Scissors': ")
    hChoice = hChoice.toLowerCase()
    return hChoice
}
function playRound(mChoice, hChoice){
        console.log("Machine Choice: ", mChoice, "| Player Choice: ", hChoice)
        if (mChoice == "rock"){
            if (hChoice == "paper"){
                player ++;
                console.log("Player wins!");
            } else if (mChoice == "scissors"){
                machine ++;
                console.log("Machine wins!");
            } else {
                console.log("Nobody wins!");
            }
        } else if (mChoice == "paper"){
            if(hChoice == "scissors"){
                player ++;
                console.log("Player wins!");
            } else if (hChoice == "rock") {
                machine ++;
                console.log("Machine wins!")
            } else {
                console.log("Nobody wins!");
            }
        } else {
            if (hChoice == "rock"){
                player ++;
                console.log("Player wins!");
            } else if (hChoice == "paper") {
                machine ++;
                console.log("Machine wins!");
            } else {
                console.log("Nobody wins!");
            }
        }
}
function playGame(){
    player = 0
    machine = 0
    for (i = 0; i < 5; i++){
        machineChoice()
        humanChoice()
        playRound(mChoice, hChoice)
    }
    console.log("Machine Score: ", machine, "| Player Score: ", player)
    if (player > machine){
        console.log("Player wins the game!")
    } else if (player < machine){
        console.log("Machine wins the game!")
    } else {
        console.log("Tied game, nobody wins!")
    }
}
console.log("Hello, today we gonna play a simple rock paper scissors game. Type 'playGame()' to start a game of five rounds against me (The machine).")