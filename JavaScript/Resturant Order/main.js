// Importing the menuArray from data.js
import { menuArray } from "./data.js";

// Getting the buy-form element and initializing an empty cartItems array
const buyForm = document.getElementById("buy-form")
let cartItems = []

// Adding a click event listener to the document
document.addEventListener("click", function (e) {
    // Creating a list of food items
    const list = ["pizza", "burger", "beer"];
    // Looping through the list and checking if the clicked element has a corresponding dataset
    for (let i = 0; i < list.length; i++) {
      if (e.target.dataset[list[i]]) {
        handlefoodBtn(e.target.dataset[list[i]]);
      }
    }
  
    // Checking if the clicked element has a dataset with an id
    if (e.target.dataset.id) {
      handleRemovebtn(e.target.dataset.id);
    }
  });
  
// Function to handle adding a food item to the cart
function handlefoodBtn(food) {
    // Filtering the menuArray to find the selected food item
    const items = menuArray.filter(function (menu) {
      return food === menu.id;
    })[0];
  
    // Adding the selected food item to the cartItems array and updating the cart display
    cartItems.push(items);
    getfoodHtml(cartItems);
  }
  
// Function to handle removing a food item from the cart
function handleRemovebtn(id) {
    // Finding the index of the selected food item in the cartItems array
    const index = cartItems.findIndex(function (item) {
      return item.id === id;
    });
  
    // Removing the selected food item from the cartItems array and updating the cart display
    cartItems.splice(index, 1);
    getfoodHtml(cartItems);
    
    // Removing the cart display if there are no items in the cart
    if (cartItems.length === 0) {
        document.querySelector(".buymenu").remove();
        document.querySelectorAll(".buy").forEach((element) => element.remove());
      }
  }
  
// Function to update the cart display
function getfoodHtml(foodMenu){
    let totalPrice = 0
    // Calculating the total price of the items in the cart
    cartItems.forEach(function(item){
        totalPrice += item.price
    })
    
    let feedHtml = ''
    // Generating HTML for each item in the cart
    foodMenu.forEach(function(menu){
        feedHtml +=`
        <div class="buy">
            <h3>${menu.name}</h3>
            <h5 class="remove pointer" data-id="${menu.id}">remove</h5>
            <h4>$${menu.price}</h4>
        </div> 
    `
    })

    // Adding HTML for the cart total and order button
    feedHtml +=`
        <div class="buymenu">
            <div class="buy fatborder">
                <h3>Total price:</h3>
                <h4 class="price">$${totalPrice}</h4>    
            </div>
            <button id="order" class="pointer">Complete order</button>
        </div>
    `
    
    // Updating the feed element with the generated HTML and adding event listeners to the order and close buttons
    document.getElementById("feed").innerHTML = feedHtml
    document.getElementById("order").addEventListener("click",showForm)
    document.getElementById("close-btn").addEventListener("click",closeForm)
    document.getElementById("pay-btn").addEventListener("click",showThanks)
}

// Function to show the thank you message and clear the cart
function showThanks(){
    // Setting a timeout to clear the thank you message after 1 second
    setTimeout(()=> {
        document.querySelector("#thanks h5").textContent =" "
        document.getElementById("thanks").classList.add("hidden")
    }, 1000)
    // Clearing the cartItems array and getting the name input value
    cartItems = []
    const name = document.getElementById("name-input").value
    
    // Updating the thank you message with the user's name and showing it
    document.querySelector("#thanks h5").textContent =`Thanks, ${name}! Your order is on its way!`
    document.getElementById("thanks").classList.remove("hidden")
    // Removing the cart display and closing the form
    document.querySelector(".buymenu").remove()
    document.querySelectorAll(".buy").forEach(element => element.remove())

    closeForm()
}

// Function to show the buy form
function showForm(){
    buyForm.style.display = "inline"
    // Preventing the default form submission behavior
    buyForm.addEventListener("submit", function(e){
        e.preventDefault()
    })
}

// Function to close the buy form
function closeForm(){
    buyForm.style.display = "none"
}
