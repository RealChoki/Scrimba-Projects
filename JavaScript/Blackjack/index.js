let player = {
    name: "Choki-chan",
    chips: 469
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let cardsEl = document.getElementById("cards-el")

document.getElementById("player-el").textContent = player.name + ": $" + player.chips

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

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    document.getElementById("sum-el").textContent = "Sum: " + sum

    sum <=  20 ? message = "Do you want to draw a new card?" : sum === 21 ? (hasBlackJack = true, message = "You've got Blackjack!") : ( isAlive = false, message = "You're out of the game!")
    
    document.getElementById("message-el").textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
