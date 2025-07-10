var prompt = require("prompt-sync")()

function guess(guessedNumber)
{
    let randomNumber = Math.floor(Math.random()*5)+1
    if(randomNumber == guessedNumber){
        console.log("you guessed correct")
    }else{
        console.log("you guessed Wrong, RandomNumber is "+randomNumber)
    }
}
let guessedNumber=prompt()
guess(guessedNumber)


// let input = document.getElementById("inputBox")
// let result = document.getElementById("result")
// let guess = document.getElementById("guesscount")
// let guessRemaining = 3

// let randomNumber = Math.floor(Math.random() * 5) + 1

// function checkNumber() {

//     if (Number(input.value) == randomNumber) {
//         alert("You Guessed it Right, Congrats")
//         result.textContent = "You are Guessed it Right! "
//     }
//     else {
//         guessRemaining = guessRemaining - 1
//         if (guessRemaining == 0) {
//             alert("You Tired too Much, RandomNumber is : " + randomNumber + " Reload Again...")
//         }
//         result.textContent = "You are Guessed it Wrong!"
//         guess.textContent = "Reamaining Guess : " + guessRemaining
//     }
// }

// Input value
// let input = document.getElementById("inputNumber")
// let result = document.getElementById("result")
// let guess = document.getElementById("guessRemaining")
// let btn = document.getElementById("btn")
// let guessLeft = 3

// // RandomNumber
// let randomNumber = Math.floor(Math.random() * 5) + 1

// btn.addEventListener("click",function(){
//     if (Number(input.value) == randomNumber) {
//         alert("You guessed it Right, Well Done...")
//     }
//     else {
//         guessLeft = guessLeft - 1
//         if (guessLeft == 0) {
//             alert("Too Many Attempt, RandomNumber : " + randomNumber)
//         }
//         result.textContent = "Yo9u guessed it wrong!"
//         guess.textContent = "Available Guess : " + guessLeft
//     }
// })
