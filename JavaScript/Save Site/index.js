// Initialize an empty array to store leads
let myLeads = []

// Get references to the necessary DOM elements
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

// Try to load leads from local storage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// If there are leads in local storage, load them into myLeads array and render them
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// Event listener for the tab button
tabBtn.addEventListener("click", function(){    
    // Query the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        // Add the current tab's URL to myLeads array
        myLeads.push(tabs[0].url)
        // Save the updated myLeads array to local storage
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        // Render the updated myLeads array
        render(myLeads)
    })
})

// Function to render the leads
function render(leads) {
    let listItems = ""
    // Loop through the leads array and create a list item for each lead
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    // Update the ul element's innerHTML with the list items
    ulEl.innerHTML = listItems
}

// Event listener for the delete button
deleteBtn.addEventListener("dblclick", function() {
    // Clear local storage
    localStorage.clear()
    // Clear the myLeads array
    myLeads = []
    // Render the empty myLeads array
    render(myLeads)
})

// Event listener for the input button
inputBtn.addEventListener("click", function() {
    // Add the input value to the myLeads array
    myLeads.push(inputEl.value)
    // Clear the input field
    inputEl.value = ""
    // Save the updated myLeads array to local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // Render the updated myLeads array
    render(myLeads)
})