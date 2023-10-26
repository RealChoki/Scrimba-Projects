// Conversion factors
const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;

// Get input field element
const inputField = document.getElementById("input-fld");

// Add event listener to convert button
document.getElementById("convert-btn").addEventListener("click", function() {
    // Get input value
    const inputValue = inputField.value;

    // Calculate length conversions
    const feetValue = inputValue * meterToFeet;
    const metersValue = inputValue / meterToFeet;

    // Calculate volume conversions
    const gallonsValue = inputValue * literToGallon;
    const litersValue = inputValue / literToGallon;

    // Calculate mass conversions
    const poundsValue = inputValue * kilogramToPound;
    const kilosValue = inputValue / kilogramToPound;

    // Update length conversion output
    document.getElementById("lgth").textContent = `
        ${inputValue} meters = ${feetValue.toFixed(2)} feet |
        ${inputValue} feet = ${metersValue.toFixed(2)} meters
    `;

    // Update volume conversion output
    document.getElementById("vlm").textContent = `
        ${inputValue} liters = ${gallonsValue.toFixed(2)} gallons |
        ${inputValue} gallons = ${litersValue.toFixed(2)} liters
    `;

    // Update mass conversion output
    document.getElementById("mass").textContent = `
        ${inputValue} kilos = ${poundsValue.toFixed(2)} pounds |
        ${inputValue} pounds = ${kilosValue.toFixed(2)} kilos
    `;
});