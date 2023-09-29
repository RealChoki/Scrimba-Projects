let count = 0

document.getElementById("increment-btn").addEventListener("click",()=>{
    count += 1
    document.getElementById("count-el").textContent = count
}) 

document.getElementById("save-btn").addEventListener("click",()=>{
    const saveEl = document.getElementById("save-el")
    if( saveEl.textContent == "Previous amount of people:"){
        saveEl.textContent += ` ${count} `
    } else{
        saveEl.textContent += `- ${count} `
    }
    document.getElementById("count-el").textContent = 0
    count = 0
})


