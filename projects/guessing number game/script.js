// Generate a random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);
let newGameBtn;

// Select HTML Elements
const submit = document.querySelector("#submit");
const guessField = document.querySelector("#guessField");
const previousGuess = document.querySelector("#previousGuess");
const remaining = document.querySelector("#remaining");
const message = document.querySelector("#message");

// Variables
let guesses = [];
let numGuesses = 1;
let playGame = true;

// Start Game
if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();

        const guess = Number(guessField.value);

        validateGuess(guess);
    });
}

// Validate User Input
function validateGuess(guess) {

    if (isNaN(guess)) {
        alert("Please enter a valid number.");
    }
    else if (guess < 1) {
        alert("Please enter a number greater than 0.");
    }
    else if (guess > 100) {
        alert("Please enter a number less than or equal to 100.");
    }
    else {

        guesses.push(guess);

        if (numGuesses === 10) {

            displayGuess(guess);

            displayMessage(`Game Over! Random Number was ${randomNumber}`);

            endGame();

        }
        else {

            displayGuess(guess);

            checkGuess(guess);

        }
    }
}

// Check Guess
function checkGuess(guess) {

    if (guess === randomNumber) {

        displayMessage("🎉 Congratulations! You guessed it correctly.");

        endGame();

    }
    else if (guess < randomNumber) {

        displayMessage("📉 Number is TOO LOW");

    }
    else {

        displayMessage("📈 Number is TOO HIGH");

    }
}

// Display Guess
function displayGuess(guess) {

    guessField.value = "";

    previousGuess.innerHTML += `${guess} `;

    numGuesses++;

    remaining.innerHTML = `${11 - numGuesses}`;
}

// Display Messages
function displayMessage(msg) {

    message.innerHTML = `<h3>${msg}</h3>`;

}

// End Game
function endGame() {

    guessField.value = "";

    guessField.setAttribute("disabled", "");

    submit.setAttribute("disabled", "");

    playGame = false;

    // Create New Game button
    newGameBtn = document.createElement("button");

    newGameBtn.innerHTML = "Start New Game";

    newGameBtn.id = "newGame";

    message.appendChild(document.createElement("br"));
    message.appendChild(newGameBtn);

    newGameBtn.addEventListener("click", newGame);
}

function newGame() {

    randomNumber = parseInt(Math.random() * 100 + 1);

    guesses = [];

    numGuesses = 1;

    previousGuess.textContent = "";

    remaining.textContent = "10";

    message.innerHTML = "";

    guessField.removeAttribute("disabled");

    submit.removeAttribute("disabled");

    guessField.value = "";

    playGame = true;
}