// Define an array of all possible characters for the password
const allCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

// Define the length of the password
const passwordLength = 12;

// Get references to the three buttons and two checkmarks in the HTML
const firstBtn = document.getElementById("gen-btn");
const secoundBtn = document.getElementById("second-Btn");
const thirdBtn = document.getElementById("third-Btn");
const firstCheckMark = document.getElementById("first-checkmark");
const secondCheckMark = document.getElementById("second-checkmark");

// Add an event listener to the first button that generates a random password and displays it on the second and third buttons
firstBtn.addEventListener("click", () => {
    // Define a function that returns a random character from the allCharacters array
    function getRandomCharacter(){
        let randomCharacter = Math.floor(Math.random()* allCharacters.length)
        return allCharacters [randomCharacter]
    }
    // Define a function that generates a random password of length passwordLength by calling getRandomCharacter() in a loop
    function getRandomPassword(){
        let randomPassword = ""
        for (let i = 0; i < passwordLength; i++){
        randomPassword += getRandomCharacter() 
        }
        return randomPassword
    }
    // Set the text content of the second and third buttons to the generated password, and hide the checkmarks
    secoundBtn.textContent = getRandomPassword()
    thirdBtn.textContent = getRandomPassword()
    firstCheckMark.classList.add("hidden")
    secondCheckMark.classList.add("hidden")
    // Call the createAnimation() function to add a visual effect to the button click
    createAnimation(firstBtn)
})

// Add an event listener to the second button that copies the text content of the button to the clipboard and displays a checkmark
secoundBtn.addEventListener("click", () => {
    const firstCopiedPassword = secoundBtn.textContent
    navigator.clipboard.writeText(firstCopiedPassword)     
    firstCheckMark.classList.remove("hidden")
    secondCheckMark.classList.add("hidden")
    // Call the createAnimation() function to add a visual effect to the button click
    createAnimation(secoundBtn)
})

// Add an event listener to the third button that copies the text content of the button to the clipboard and displays a checkmark
thirdBtn.addEventListener("click", () => {
    const secoundCopiedPassword = thirdBtn.textContent
    navigator.clipboard.writeText(secoundCopiedPassword)   
    secondCheckMark.classList.remove("hidden")
    firstCheckMark.classList.add("hidden")
    // Call the createAnimation() function to add a visual effect to the button click
    createAnimation(thirdBtn)
})

// Define a function that adds a visual effect to a button click by adding and removing a CSS class
function createAnimation(btn) {
    btn.classList.add("button-clicked")
    setTimeout(() => {
        btn.classList.remove("button-clicked")
    },350)
}