
var services = document.getElementById('service')
var country = document.getElementById('country')
var genre = document.getElementById('genre')
var language = document.getElementById('language')
var keyword = document.getElementById('keyword')


function fetchMovieData() {
    const url = `https://streaming-availability.p.rapidapi.com/v2/search/basic?country=${country.value}&services=${services.value}&output_language=en&show_type=movie&genre=${genre.value}&show_original_language=${language.value}&keyword=${keyword.value}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f527281d89mshbcaebc5ff829f0dp1e0856jsn130bd59d1ec1',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
    };

    console.log(services.value + country.value + genre.value + language.value + keyword.value)

    fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            for (let i = 0; i < data.result.length; i++) {
                const movie = data.result[i];
                const movieInfo = {
                    title: movie.title,
                    poster: movie.poster,
                    overview: movie.overview,
                    youtube: movie.youtubeTrailerVideoLink,
                    country: movie.country

                }
                console.log(movieInfo);
                
                // Do other operations with the data here
            }
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