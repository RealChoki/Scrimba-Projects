
let firstElement = document.getElementById("first-el")
let secoundElement = document.getElementById("secound-el")
let starterNumber = 0
let secoundStarterNumber = 0

function add1(){
    starterNumber += 1
    firstElement.textContent = starterNumber
}


function add2(){
    starterNumber += 2
    firstElement.textContent = starterNumber
}


function add3(){
    starterNumber += 3
    firstElement.textContent = starterNumber
}

function secoundAdd1(){
    secoundStarterNumber += 1
    secoundElement.textContent = secoundStarterNumber
}


function secoundAdd2(){
    secoundStarterNumber += 2
    secoundElement.textContent = secoundStarterNumber
}


function secoundAdd3(){
    secoundStarterNumber += 3
    secoundElement.textContent = secoundStarterNumber
}

function reset(){
    firstElement.textContent = 0
    secoundElement.textContent = 0
    secoundStarterNumber = 0
    starterNumber = 0
}