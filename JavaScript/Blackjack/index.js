// Player object
let player = {
    name: "Choki-chan",
    chips: 469
}

// Game state variables
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let cardsEl = document.getElementById("cards-el")

// Display player's name and chips
document.getElementById("player-el").textContent = player.name + ": $" + player.chips

// Function to generate a random card
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

// Function to start the game
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// Function to update the game UI
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    document.getElementById("sum-el").textContent = "Sum: " + sum

    sum <=  20 ? message = "Do you want to draw a new card?" : sum === 21 ? (hasBlackJack = true, message = "You've got Blackjack!") : ( isAlive = false, message = "You're out of the game!")
    
    document.getElementById("message-el").textContent = message
}

// Function to draw a new card
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}