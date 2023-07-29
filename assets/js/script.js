
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
                    services: movie.streamingInfo,
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
        var imgUrl = movieObj.poster.original;
        var title = movieObj.title;
        var cast = movieObj.cast;
        //var services = movieObj.services;
        var rating = movieObj.rating;
        var country = movieObj.country;
        var lang = movieObj.language;
        var desc = movieObj.description;

        var movie = $(`
            <div class="w-full dark:text-white movieData">
            <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600 movieImage">
                <img src="${imgUrl}" alt="Movie Poster"
                class="h-full w-full object-cover rounded-lg">
            </div>


            <h1 class="w-100 p-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center"> ${title} </h1>

            <p class="w-100 p-2 h-24 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700  overflow-auto clamp-3"> <strong>Description:</strong> ${desc} </p>

            <p class="w-100 p-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"> <strong>Cast:</strong>  ${cast.join(', ')} </p>

            <p class="w-24 p-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

            <p class=" mt-4  p-2 bg-gray-200 rounded-lg dark:bg-gray-700"><strong>Rating:</strong> Rated - ${rating} </p>

            <p class=" mt-4  p-2 bg-gray-200 rounded-lg dark:bg-gray-700"><strong>Language:</strong> ${lang} </p>
        `)
        $('#movieResults').append(movie);
    }
}
populateResults();

var submitBtn = document.getElementById('submitBtn');

if (submitBtn){
    submitBtn.addEventListener('click', fetchMovieData)
}

// Language box
var clearLanguageInput=document.querySelector ("#clearLanguageInput");
var languageInput=document.querySelector ("#language")

if (clearLanguageInput){
    clearLanguageInput.addEventListener("click", function(event){
        console.log ("click")
        event.preventDefault ()
        languageInput.value=""
    });
}

var languageButton=document.querySelector ("#languageButton")
var languageEl= document.querySelector("#languageListElements")
if (languageButton){
    languageButton.addEventListener ("click", function (event){
        console.log ("click")
        languageEl.classList.remove ("hide")
        event.preventDefault ()
       
        var languageList= ""
        languageList+= `
        <option>Spanish</option>
        `;
        languageEl.innerHTML=languageList
    
    });
}

if (languageEl){
    languageEl.addEventListener("click", function (event){
        var element=event.target
        if (element.matches ("option")){
            languageInput.value=element.textContent
        }
        languageEl.classList.add ("hide")
        languageEl.innerHTML=""
    
    }) 
}

// Genre box
var clearGenreInput=document.querySelector ("#clearGenreInput");
var genreInput=document.querySelector ("#genre")

if (clearGenreInput){
    clearGenreInput.addEventListener("click", function(event){
        console.log ("click")
        event.preventDefault ()
        genreInput.value=""
    });
}

var genreButton=document.querySelector ("#genreButton")
var genreEl= document.querySelector("#genreListElements")
if (genreButton){
    genreButton.addEventListener ("click", function (event){
        console.log ("click")
        genreEl.classList.remove ("hide")
        event.preventDefault ()
       
        var genreList= ""
        genreList+= `
        <option>Romance</option>
        `;
        genreEl.innerHTML=genreList
    
    });
}

if (genreEl)[
    genreEl.addEventListener("click", function (event){
        var element=event.target
        if (element.matches ("option")){
            genreInput.value=element.textContent
        }
        genreEl.classList.add ("hide")
        genreEl.innerHTML=""
    
    }) 
]


// Service box
var clearServiceInput=document.querySelector ("#clearServiceInput");
var serviceInput=document.querySelector ("#service")

if (clearServiceInput){
    clearServiceInput.addEventListener("click", function(event){
        console.log ("click")
        event.preventDefault ()
        serviceInput.value=""
    });
}


var serviceButton=document.querySelector ("#serviceButton")
var serviceEl= document.querySelector("#serviceListElements")

if (serviceButton){
    serviceButton.addEventListener ("click", function (event){
        console.log ("click")
        serviceEl.classList.remove ("hide")
        event.preventDefault ()
       
        var serviceList= ""
        serviceList+= `
        <option>Netflix</option>
        `;
        serviceEl.innerHTML=serviceList
    
    });
}

if (serviceEl){
    serviceEl.addEventListener("click", function (event){
        var element=event.target
        if (element.matches ("option")){
            serviceInput.value=element.textContent
        }
        serviceEl.classList.add ("hide")
        serviceEl.innerHTML=""
    
    }) 
}