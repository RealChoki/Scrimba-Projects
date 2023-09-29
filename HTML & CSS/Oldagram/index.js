const firstlikeBtn = document.getElementById("firstlike-btn")
let firstlikeCount = document.getElementById("1like-count")
const secoundlikeBtn = document.getElementById("secoundlike-btn")
let secoundlikeCount = document.getElementById("2like-count")
const thirdlikeBtn = document.getElementById("thirdlike-btn")
let thirdlikeCount = document.getElementById("3like-count")
const forthlikeBtn = document.getElementById("forthlike-btn")
let forthlikeCount = document.getElementById("4like-count")

firstlikeBtn.addEventListener("click",function(){
    let number1 = 70
    if (firstlikeCount.textContent < number1){
        firstlikeCount.textContent = Number(firstlikeCount.textContent) + 1
        firstlikeBtn.src = "images/redheart.png" 
    } else{ 
        firstlikeCount.textContent = Number(firstlikeCount.textContent) - 1
        firstlikeBtn.src = "images/icon-heart.png" 
    }
})

secoundlikeBtn.addEventListener("click",function(){
    let number2 = 421
    if (secoundlikeCount.textContent < number2){
        secoundlikeCount.textContent = Number(secoundlikeCount.textContent) + 1
        secoundlikeBtn.src = "images/redheart.png"  
    } else{
        secoundlikeCount.textContent = Number(secoundlikeCount.textContent) - 1
        secoundlikeBtn.src = "images/icon-heart.png"  
    }
})

thirdlikeBtn.addEventListener("click",function(){
    let number3 = 69421
    if (thirdlikeCount.textContent < number3){
        thirdlikeCount.textContent = Number(thirdlikeCount.textContent) + 1 
        thirdlikeBtn.src = "images/redheart.png" 
    } else{
        thirdlikeCount.textContent = Number(thirdlikeCount.textContent) - 1 
        thirdlikeBtn.src = "images/icon-heart.png"
    }
})

forthlikeBtn.addEventListener("click",function(){
    let number3 = 3
    if (forthlikeCount.textContent < number3){
        forthlikeCount.textContent = Number(forthlikeCount.textContent) + 1 
        forthlikeBtn.src = "images/redheart.png" 
    } else{
        forthlikeCount.textContent = Number(forthlikeCount.textContent) - 1 
        forthlikeBtn.src = "images/icon-heart.png"
    }
})