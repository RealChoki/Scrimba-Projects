const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceBtns = document.getElementById('modal-choice-btns')

// Set a timeout to display the modal after 1.5 seconds
setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

// Add an event listener to the close button to hide the modal when clicked
modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
}) 

// Add an event listener to the decline button to toggle the order of the choice buttons when mouse enters
declineBtn.addEventListener('mouseenter', function(){
    modalChoiceBtns.classList.toggle('modal-btns-reverse')
}) 

// Add an event listener to the consent form to prevent its default submission and to handle the submission manually
consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    // Get the form data from the consent form
    const consentFormData = new FormData(consentForm)
    // Get the full name from the form data
    const fullName = consentFormData.get('fullName')
    
    // Change the modal text to show a loading message
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>` 
    
    // Set a timeout to change the loading message after 1.5 seconds
    setTimeout(function(){
        document.getElementById('upload-text').innerText = `
        Making the sale...`
    }, 1500)
    
    // Set a timeout to change the modal content after 3 seconds
    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
    `
    // Enable the close button
    modalCloseBtn.disabled = false
    }, 3000)
  
}) 
