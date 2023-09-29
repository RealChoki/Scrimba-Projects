const allCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordLength = 12
const firstBtn = document.getElementById("gen-btn")
const secoundBtn = document.getElementById("second-Btn")
const thirdBtn = document.getElementById("third-Btn")
const firstCheckMark = document.getElementById("first-checkmark")
const secondCheckMark = document.getElementById("second-checkmark")


firstBtn.addEventListener("click", () => {
    function getRandomCharacter(){
        let randomCharacter = Math.floor(Math.random()* allCharacters.length)
        return allCharacters [randomCharacter]
    }
    function getRandomPassword(){
        let randomPassword = ""
        for (let i = 0; i < passwordLength; i++){
        randomPassword += getRandomCharacter() 
        }
        return randomPassword
    }
    secoundBtn.textContent = getRandomPassword()
    thirdBtn.textContent = getRandomPassword()
    firstCheckMark.classList.add("hidden")
    secondCheckMark.classList.add("hidden")
    createAnimation(firstBtn)
})

secoundBtn.addEventListener("click", () => {
    const firstCopiedPassword = secoundBtn.textContent
    navigator.clipboard.writeText(firstCopiedPassword)     
    firstCheckMark.classList.remove("hidden")
    secondCheckMark.classList.add("hidden")
    createAnimation(secoundBtn)


})

thirdBtn.addEventListener("click", () => {
    const secoundCopiedPassword = thirdBtn.textContent
    navigator.clipboard.writeText(secoundCopiedPassword)   
    secondCheckMark.classList.remove("hidden")
    firstCheckMark.classList.add("hidden")
    createAnimation(thirdBtn)
})


function createAnimation(btn) {
    btn.classList.add("button-clicked")
    setTimeout(() => {
        btn.classList.remove("button-clicked")
    },350)
}