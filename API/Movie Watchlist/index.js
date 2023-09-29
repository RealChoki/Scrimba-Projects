const feed = document.getElementById("feed")
const watchList = document.getElementById("watch-list")
const fetchLink = "http://www.omdbapi.com/?apikey=a80cae51&"
const searchPlaceHolder = document.querySelector(".placeholder-search")
const title = document.getElementById("title")
const search = document.querySelector(".search")
const notification = document.getElementById("notify")

let listOfMovies = []

window.addEventListener("DOMContentLoaded", () => {
    const storedMovies = localStorage.getItem("watchlist");
    if (storedMovies) {
        listOfMovies = JSON.parse(storedMovies);
    }
})

document.getElementById("search-btn").addEventListener("click", () => {
    searchPlaceHolder.classList.add("hide")
    feed.innerHTML = ""
    fetch(`${fetchLink}s=${document.getElementById("search-field").value}`)
        .then(res => res.json())
        .then(data => {
            data.Response == "False" ? feed.innerHTML = `<h1 class="false">Unable to find what you’re looking for. Please try another search.</h1>` : null
            for (let i = 0; i < data.Search.length; i++) {
                const imdbID = data.Search[i].imdbID;
                fetch(`${fetchLink}i=${imdbID}`)
                    .then(res => res.json())
                    .then(data => {
                        const { Poster, Title, Plot, Genre, Runtime, imdbRating } = data
                        feed.innerHTML += `
                            <div class="movie">
                                <img class="poster" src="${Poster}">
                                <div>
                                    <div class="first row">
                                        <h3>${Title}</h3>
                                        <div class="rating">
                                            <img src="images/star.png">
                                            <h6>${imdbRating}</h6>
                                        </div>
                                    </div>
                                    <div class="secound row">
                                        <h5 class="run-time">${Runtime}</h5>
                                        <h5 class="genre">${Genre}</h5>
                                        <div class="watchlist">
                                            <img id="add-btn" src="images/plus.png">
                                            <h5>Watchlist</h5>
                                        </div>
                                    </div>
                                    <p class="plot">${Plot}</p>
                                </div>
                            </div>
                        `
                    })
            }
        })
})

watchList.addEventListener("click", () => {
    watchList.textContent = "Search for movies"
    title.textContent = "My Watchlist"
    searchPlaceHolder.classList.add("hide")
    search.classList.add("hide")    
    feed.innerHTML = ""
    for (let i = 0; i < listOfMovies.length; i++) {
        const {poster, title, plot, rating, runtime, genre} = listOfMovies[i]
        feed.innerHTML += `
            <div class="movie">
                <img class="poster" src="${poster}">
                <div>
                    <div class="first row">
                        <h3>${title}</h3>
                        <div class="rating">
                            <img src="images/star.png">
                            <h6>${rating}</h6>
                        </div>
                    </div>
                    <div class="secound row">
                        <h5 class="run-time">${runtime}</h5>
                        <h5 class="genre">${genre}</h5>
                        <div class="watchlist">
                            <img id="delete-btn" src="images/minus.png">
                            <h5>Watchlist</h5>
                        </div>
                    </div>
                    <p class="plot">${plot}</p>
                </div>
            </div>
        `
    
    }
})

feed.addEventListener("click", (e) => {
    if (e.target.id == "delete-btn"){
        const movieElement = e.target.closest(".movie")
        const movieTitle = movieElement.querySelector("h3").textContent
        listOfMovies = listOfMovies.filter(movie => movie.title !== movieTitle)
        movieElement.remove()
        localStorage.setItem("watchlist", JSON.stringify(listOfMovies))
        if(listOfMovies.length == 0){
            notification.style.display = "none"
        }else{
            notification.textContent = listOfMovies.length
        }
    }
    if (e.target.id == "add-movie"){
        feed.innerHTML = ""
        watchList.textContent = "my Watchlist"
        title.textContent = "Find your film"
        searchPlaceHolder.classList.remove("hide")
        search.classList.remove("hide")
        document.querySelector(".false").classList.add("hide")
    }
    feed.querySelectorAll(".movie").length == 0 ? feed.innerHTML = `
    <h1 class="false">Your watchlist is looking a little empty...</h1>
    <div class="go-add-movies">
        <img id="add-movie" src="images/plus.png">
        <h2 class="go">Let’s add some movies!</h2>
    </div>
    `: null
})

feed.addEventListener("click", (e) => {
    if (e.target.id == "add-btn") {
        const movieElement = e.target.closest(".movie")
        const movie = {
            title: movieElement.querySelector("h3").textContent,
            poster: movieElement.querySelector(".poster").src,
            plot: movieElement.querySelector(".plot").textContent,
            rating: movieElement.querySelector("h6").textContent,
            runtime: movieElement.querySelector(".run-time").textContent,
            genre: movieElement.querySelector(".genre").textContent
        }
        listOfMovies.push(movie)
        localStorage.setItem("watchlist", JSON.stringify(listOfMovies))
        notification.style.display = "flex"
        notification.textContent = listOfMovies.length
    }
})


