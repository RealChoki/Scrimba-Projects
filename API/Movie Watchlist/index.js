// Getting references to DOM elements
const feed = document.getElementById("feed");
const watchList = document.getElementById("watch-list");
const fetchLink = "http://www.omdbapi.com/?apikey=a80cae51&";
const searchPlaceHolder = document.querySelector(".placeholder-search");
const title = document.getElementById("title");
const search = document.querySelector(".search");
const notification = document.getElementById("notify");

// Initializing an empty array to store movies in the watchlist
let listOfMovies = [];

// Event listener for when the DOM is loaded
window.addEventListener("DOMContentLoaded", () => {
  // Checking if there are any movies in the watchlist stored in local storage
  const storedMovies = localStorage.getItem("watchlist");
  if (storedMovies) {
    // If there are, parse the JSON and store it in the listOfMovies array
    listOfMovies = JSON.parse(storedMovies);
  }
});

// Event listener for when the search button is clicked
document.getElementById("search-btn").addEventListener("click", () => {
  // Hiding the search placeholder text
  searchPlaceHolder.classList.add("hide");
  // Clearing the feed element
  feed.innerHTML = "";
  // Fetching movie data from the OMDB API using the search query entered by the user
  fetch(`${fetchLink}s=${document.getElementById("search-field").value}`)
    .then((res) => res.json())
    .then((data) => {
      // Checking if the API response is false
      data.Response == "False"
        ? (feed.innerHTML = `<h1 class="false">Unable to find what you’re looking for. Please try another search.</h1>`)
        : null;
      // Looping through the search results and fetching additional data for each movie
      for (let i = 0; i < data.Search.length; i++) {
        const imdbID = data.Search[i].imdbID;
        fetch(`${fetchLink}i=${imdbID}`)
          .then((res) => res.json())
          .then((data) => {
            // Extracting relevant data from the API response
            const { Poster, Title, Plot, Genre, Runtime, imdbRating } = data;
            // Adding the movie HTML to the feed element
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
                  <div class="second row">
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
            `;
          });
      }
    });
});

// Event listener for when the watchlist button is clicked
watchList.addEventListener("click", () => {
  // Updating the UI to show the watchlist
  watchList.textContent = "Search for movies";
  title.textContent = "My Watchlist";
  searchPlaceHolder.classList.add("hide");
  search.classList.add("hide");
  feed.innerHTML = "";
  // Looping through the movies in the watchlist and adding them to the feed element
  for (let i = 0; i < listOfMovies.length; i++) {
    const { poster, title, plot, rating, runtime, genre } = listOfMovies[i];
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
          <div class="second row">
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
    `;
  }
});

// Event listener for when a movie in the watchlist is clicked to be removed
feed.addEventListener("click", (e) => {
  if (e.target.id == "delete-btn") {
    // Removing the movie from the watchlist array and local storage
    const movieElement = e.target.closest(".movie");
    const movieTitle = movieElement.querySelector("h3").textContent;
    listOfMovies = listOfMovies.filter((movie) => movie.title !== movieTitle);
    movieElement.remove();
    localStorage.setItem("watchlist", JSON.stringify(listOfMovies));
    // Updating the notification count or hiding it if the watchlist is empty
    if (listOfMovies.length == 0) {
      notification.style.display = "none";
    } else {
      notification.textContent = listOfMovies.length;
    }
  }
});

// Event listener for when a movie in the search results is clicked to be added to the watchlist
feed.addEventListener("click", (e) => {
  if (e.target.id == "add-btn") {
    // Adding the movie to the watchlist array and local storage
    const movieElement = e.target.closest(".movie");
    const movie = {
      title: movieElement.querySelector("h3").textContent,
      poster: movieElement.querySelector(".poster").src,
      plot: movieElement.querySelector(".plot").textContent,
      rating: movieElement.querySelector("h6").textContent,
      runtime: movieElement.querySelector(".run-time").textContent,
      genre: movieElement.querySelector(".genre").textContent,
    };
    listOfMovies.push(movie);
    localStorage.setItem("watchlist", JSON.stringify(listOfMovies));
    // Updating the notification count and displaying it
    notification.style.display = "flex";
    notification.textContent = listOfMovies.length;
  }
});

// Event listener for when the "add movie" button is clicked
feed.addEventListener("click", (e) => {
  if (e.target.id == "add-movie") {
    // Updating the UI to show the search results
    feed.innerHTML = "";
    watchList.textContent = "my Watchlist";
    title.textContent = "Find your film";
    searchPlaceHolder.classList.remove("hide");
    search.classList.remove("hide");
    // Hiding the "no movies in watchlist" message if it's currently displayed
    document.querySelector(".false").classList.add("hide");
  }
  // Displaying a message to add movies if the watchlist is empty
  feed.querySelectorAll(".movie").length == 0
    ? (feed.innerHTML = `
        <h1 class="false">Your watchlist is looking a little empty...</h1>
        <div class="go-add-movies">
          <img id="add-movie" src="images/plus.png">
          <h2 class="go">Let’s add some movies!</h2>
        </div>
      `)
    : null;
});