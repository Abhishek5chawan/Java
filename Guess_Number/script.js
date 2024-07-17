const randomNumber = parseInt(Math.random() * 100 + 1)
console.log(randomNumber);
const userInput = document.querySelector('#guessField')
const userSubmit = document.querySelector('#subt')
const preGuess = document.querySelector('#guesses')
const remainingAttempts = document.querySelector('#lastResult')
const result = document.querySelector('#lowOrHi')
const resultDiv = document.querySelector('.resultParas')

let prevGuess = []
let numGuess = 1

let game = true;

if(game) {
    userSubmit.addEventListener('click',function(e) {
        e.preventDefault()
        const input = parseInt(userInput.value)
        console.log(input)
        checkInput(input);
    })
}

function checkInput(input) {
            if(isNaN(input)){
                alert( 'enter a valid number');
            } else if(input < 1){
                alert('enter number greater one');
            } else if(input > 100){
                alert('Please enter number less than 100');
            } else {
                prevGuess.push(input)
            }
                if(numGuess === 11){
                    lowOrHi.innerHTML = `Game over. Random number was ${randomNumber}`
                    endGame()
                }
                else {
                    preGuess.innerHTML = `${input}`
                    numGuess++
                    remainingAttempts.innerHTML = `${11 - numGuess}`
                    if(input === randomNumber){
                        lowOrHi.innerHTML = 'You Guessed it right'
                        endGame()
                    }
                    else if(input > randomNumber){
                        lowOrHi.innerHTML = 'Number is too high'
                    }
                    else{
                        lowOrHi.innerHTML = 'Number is too low'
                    }
                
               
            }
}



function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    let button = document.createElement('button')
    button.innerHTML = `<h2 id="newGame">Start new game</h2>`
    resultDiv.appendChild(button)
    playGame = false
    newGame()
}


function newGame() {
    let newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    preGuess.innerHTML = ''
    remainingAttempts.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled')
    playGame = true
    })
}






