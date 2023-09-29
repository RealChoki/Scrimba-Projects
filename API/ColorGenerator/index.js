document.getElementById("btn").addEventListener("click", ()=>{
    const feed = document.getElementById("feed")
    const color = document.getElementById("selected-color").value.slice(1)
    const schemes = document.getElementById("color-schemes").value.toLowerCase()
    const actualData = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${schemes}&count=5`
    fetch(actualData)
        .then((res) => res.json())
        .then((data) => {
            const apiValue = data.colors
            feed.innerHTML = ""
            for (let i = 0; i < 5; i++){
                    feed.innerHTML += `
                    <div>
                        <img class="color" src=${apiValue[i].image.bare}>
                        <p class="color-code">${apiValue[i].hex.value}</p>
                    </div>
                `
            }

    })
})

document.getElementById("btn").click()

   


