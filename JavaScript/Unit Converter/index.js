/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputField = document.getElementById("input-fld")

document.getElementById("convert-btn").addEventListener("click",function(){
    const calcfeet = inputField.value * 3.281
    const calcmeters = inputField.value / 3.281

    const calcgallons = inputField.value * 0.264
    const calcliters = inputField.value / 0.264

    const calcpounds = inputField.value * 2.204
    const calcmkilos = inputField.value / 2.204
    
    document.getElementById("lgth").textContent = `
        ${inputField.value} meters = ${calcfeet.toFixed(2)} feet |
        ${inputField.value} feet = ${calcmeters.toFixed(2)} meters
    `
    document.getElementById("vlm").textContent = `
        ${inputField.value} liters = ${calcgallons.toFixed(2)} gallons |
        ${inputField.value} gallons = ${calcliters.toFixed(2)} liters
    `
    document.getElementById("mass").textContent = `
        ${inputField.value} kilos = ${calcpounds.toFixed(2)} pounds |
        ${inputField.value} pounds = ${calcmkilos.toFixed(2)} kilos
    `
})



