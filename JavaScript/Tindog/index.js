import dog from "./Dog.js"
import dogs from "./data.js"

let isWaiting = false

function getNewDog(){
    if(dogs.length > 0){
        return dogs[0]
    } 
    
}


function actOnBtnPress(btnId , popupId){
    document.getElementById(btnId).addEventListener('click', function(){
        if (!isWaiting) {
            isWaiting = true
            handleSwipe(popupId)
            setTimeout(() => {
                isWaiting = false
            }, 1000)
        }
    })
}

function handleSwipe(popupId){
    document.getElementById(popupId).style.display = "block"
    
    if(dogs.length > 1){
        setTimeout(()=> {
            dogs.shift()
            teddy = new dog(getNewDog())
            render()
        },1000)
    } else if(dogs.length === 1) {
        document.getElementById("footer").style.display = "none"
    }
}

function render() {
    document.getElementById('feed').innerHTML = teddy.getDogHtml()
}

actOnBtnPress("like", "like-pop")
actOnBtnPress("dislike", "dislike-pop")

let teddy = new dog(getNewDog())

render()