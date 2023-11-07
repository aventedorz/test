// Array of words to guess
const words = ["hangman", "javascript", "programming", "developer"];

// Select a random word from the array
const randomIndex = Math.floor(Math.random() * words.length);
const selectedWord = words[randomIndex];

// Store the guessed letters in an array
const guessedLetters = [];

// Initialize the word display with underscores
let wordDisplay = "_".repeat(selectedWord.length);

// Function to update the word display
function updateWordDisplay() {
    const displayElement = document.querySelector(".word-display p");
    displayElement.textContent = wordDisplay;
}

// Function to handle button clicks
function handleButtonClick(event) {
    const letter = event.target.textContent;
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        if (!selectedWord.includes(letter)) {
            // Update the hangman figure (implement this logic)
        } else {
            // Update the word display with the correctly guessed letter(s)
            for (let i = 0; i < selectedWord.length; i++) {
                if (selectedWord[i] === letter) {
                    wordDisplay = wordDisplay.substring(0, i) + letter + wordDisplay.substring(i + 1);
                }
            }
            updateWordDisplay();
        }
    }
}

// Add event listeners to letter buttons
const letterButtons = document.querySelectorAll(".letter-buttons button");
letterButtons.forEach(button => {
    button.addEventListener("click", handleButtonClick);
});

// Initialize the game
updateWordDisplay();
