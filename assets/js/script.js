
var services = document.getElementById('service')
var genre = document.getElementById('genre')
var language = document.getElementById('language')
var keyword = document.getElementById('keyword')


function fetchMovieData() {
    console.log("service: " + services.value + " genre: " + genre.value + " language: " + language.value + " keyword: " + keyword.value);
    const url = `https://streaming-availability.p.rapidapi.com/v2/search/basic?country=us&services=${services.value}&output_language=en&show_type=movie&genre=${genre.value}&show_original_language=${language.value}&keyword=${keyword.value}`;
    console.log(url);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f527281d89mshbcaebc5ff829f0dp1e0856jsn130bd59d1ec1',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
    };

    

    fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            var movieData = [];
            for (let i = 0; i < data.result.length; i++) {
                const movie = data.result[i];
                const movieInfo = {
                    title: movie.title,
                    poster: movie.posterURLs,
                    overview: movie.overview,
                    youtube: movie.youtubeTrailerVideoLink,
                    country: movie.countries,
                    language: movie.originalLanguage,
                    cast: movie.cast,
                    rating: movie.advisedMinimumAudienceAge,
                    description: movie.overview,
                }
                console.log(movieInfo);
                movieData.push(movieInfo);
                // Do other operations with the data here
            } 
            localStorage.setItem("moviesHistory", JSON.stringify(movieData));
            console.log(movieData);
            return movieData;
        }) 
        .then((data) => {
            document.location.replace("./results.html");
            populateResults();
            console.log(data);
        })
        .catch((error) => {
            console.error('Error fetching movie data:', error);
        });
}
/**
    * Sample JavaScript code for youtube.videos.list
    * See instructions for running APIs Explorer code samples locally:
    * https://developers.google.com/explorer-help/code-samples#javascript
    */

function fetchYoutubeData() {
    const keyword = "batman"
    const YOUTUBE_API_KEY = "AIzaSyC4D0ALMAzkDBW0LjsMJddRh-mTpyhkNYM";
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${keyword}&key=${YOUTUBE_API_KEY}`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.items[0].id.videoId);
            document.querySelector(".youtubeVideo").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
        });
}

var populateResults = function() {
    var moviesArr = JSON.parse(localStorage.getItem("moviesHistory"));

    $("#movieResults").empty();
    for (var i = 0; i < moviesArr.length; i++){
        var movieObj = moviesArr[i];
        var imgUrl = movieObj.poster[92];
        var title = movieObj.title;
        var cast = movieObj.cast;
        var services = movieObj.streamingInfo;
        var rating = movieObj.rating;
        var country = movieObj.country;
        var lang = movieObj.language;
        var desc = movieObj.description;

        var movie = $(`
            <div class="w-full movieData">
            <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600 movieImage">
                <img src="${imgUrl}" alt="Movie Poster"
                class="h-full w-full object-cover rounded-lg">
            </div>

            <!--Movie Title-->
            <h1 class="w-56 h-6 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center movieTitle"> ${title} </h1>
            <!--Movie Description-->
            <p class="w-56 h-6 mt-4 movieDescription"> ${desc} </p>
            <!--Movie Actors/Actresses-->
            <p class="w-24 h-2 mt-4 movieCast"> ${cast} </p>
            <!--Movie Services-->
            <p class="w-24 h-2 mt-4 movieServices"> ${services} </p>
            <!--Movie Ratings-->
            <p class="w-24 h-2 mt-4 movieRatings"> ${rating} </p>
            <!--Movie Language-->
            <p class="w-24 h-2 mt-4 movieLanguage"> ${lang} </p>
        `)
        $('#movieResults').append(movie);
    }
}
populateResults();

function searchMovie(event) {
    event.preventDefault();

}

var homeButton = document.getElementById('home');

homeButton.addEventListener("click", function () {
    location.reload
});

var submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', fetchMovieData)

//fetchMovieData();