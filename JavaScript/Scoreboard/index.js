// Get the first HTML element by its ID
let firstElement = document.getElementById("first-el")

// Get the second HTML element by its ID
let secoundElement = document.getElementById("secound-el")

// Initialize the starterNumber variable
let starterNumber = 0

// Initialize the secoundStarterNumber variable
let secoundStarterNumber = 0

// Function to increment starterNumber by 1 and update the first HTML element's text content
function add1(){
    starterNumber += 1
    firstElement.textContent = starterNumber
}

// Function to increment starterNumber by 2 and update the first HTML element's text content
function add2(){
    starterNumber += 2
    firstElement.textContent = starterNumber
}

// Function to increment starterNumber by 3 and update the first HTML element's text content
function add3(){
    starterNumber += 3
    firstElement.textContent = starterNumber
}

// Function to increment secoundStarterNumber by 1 and update the second HTML element's text content
function secoundAdd1(){
    secoundStarterNumber += 1
    secoundElement.textContent = secoundStarterNumber
}

// Function to increment secoundStarterNumber by 2 and update the second HTML element's text content
function secoundAdd2(){
    secoundStarterNumber += 2
    secoundElement.textContent = secoundStarterNumber
}

// Function to increment secoundStarterNumber by 3 and update the second HTML element's text content
function secoundAdd3(){
    secoundStarterNumber += 3
    secoundElement.textContent = secoundStarterNumber
}

// Function to reset the text content of both HTML elements and the values of both starter numbers
function reset(){
    firstElement.textContent = 0
    secoundElement.textContent = 0
    secoundStarterNumber = 0
    starterNumber = 0
}