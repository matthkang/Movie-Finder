
function fetchMovieData() {
    const url = 'https://streaming-availability.p.rapidapi.com/v2/search/basic?country=us&services=netflix%2Cprime.buy%2Chulu.addon.hbo%2Cpeacock.free&output_language=en&show_type=movie&genre=18&show_original_language=en&keyword=superhero';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a041739bfbmsh77bc9ee6c6dcdb3p1bb6e7jsn89ca0a0962df',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
    };

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

//fetchMovieData();
//local storage skeleton - subject to change
function searchHistory (data) {
    const titles = data.result.map(movie => movie.title)
    var historyPageEl = document.querySelector(/*html*/); //input.value of user but title only
    var historyPage = localStorage.getItem(/*html*/); // storage for
    if(!historyPage) {
        historyPage = [];
    } else {
        historyPage = JSON.parse(historyPage)
    }
    titles.forEach(title => {
        if (!historyPage.includes(title)) {
            historyPage.push(title);
        }
    });
    localStorage.setItem(/*html*/, JSON.stringify(historyPage))

    titles.forEach(title => {
        var liDiv = document.createElement("li");
        liDiv.textContent = title;
        // liDiv.classList.add("") if you want to add CSS class to the list item

        historyPageEl.appendChild(liDiv);
    });
}
