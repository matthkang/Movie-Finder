
function fetchMovieData() {
    const url = 'https://streaming-availability.p.rapidapi.com/v2/search/basic?country=us&services=netflix%2Cprime.buy%2Chulu.addon.hbo%2Cpeacock.free&output_language=en&show_type=movie&genre=18&show_original_language=en&keyword=zombie';
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
            console.log(data);
            const movieInfo = {
                title: data.result.title,
                poster: data.result.poster,
                overview: data.result.overview,
                youtube: data.result.youtubeTrailerVideoLink,
                country: data.result.country
        
            }
            console.log(movieInfo)
            // Do other operations with the data here
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
fetchMovieData();