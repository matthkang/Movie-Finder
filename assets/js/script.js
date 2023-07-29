
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


// Country box

var clearCountryInput=document.querySelector ("#clearCountryInput");
var countryInput=document.querySelector ("#country")

clearCountryInput.addEventListener("click", function(event){
    console.log ("click")
    event.preventDefault ()
    countryInput.value=""
});


var countryButton=document.querySelector ("#countryButton")
var countryEl= document.querySelector("#countryListElements")
countryButton.addEventListener ("click", function (event){
    console.log ("click")
    countryEl.classList.remove ("hide")
    event.preventDefault ()
   
    var countryList= ""
    countryList+= `
    <option>Australia</option>
    <option>Brazil</option>
    <option>Canada</option>
    <option>Denmark</option>
    <option>Ecuador</option>
    <option>France/option>
    <option>Germany</option>
    <option>Hong Kong</option>
    <option>India</option>
    <option>Japan</option>
    <option>Lithuania</option>
    <option>Mexico</option>
    <option>Norway</option>
    <option>Peru/option>
    <option>Romania</option>
    <option>Spain</option>
    `;
    countryEl.innerHTML=countryList

});

countryEl.addEventListener("click", function (event){
    var element=event.target
    if (element.matches ("option")){
        countryInput.value=element.textContent
    }
    countryEl.classList.add ("hide")
    countryEl.innerHTML=""

})

// Language box

var clearLanguageInput=document.querySelector ("#clearLanguageInput");
var languageInput=document.querySelector ("#language")

clearLanguageInput.addEventListener("click", function(event){
    console.log ("click")
    event.preventDefault ()
    languageInput.value=""
});


var languageButton=document.querySelector ("#languageButton")
var languageEl= document.querySelector("#languageListElements")
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

languageEl.addEventListener("click", function (event){
    var element=event.target
    if (element.matches ("option")){
        languageInput.value=element.textContent
    }
    languageEl.classList.add ("hide")
    languageEl.innerHTML=""

}) 


// Genre box

var clearGenreInput=document.querySelector ("#clearGenreInput");
var genreInput=document.querySelector ("#genre")

clearGenreInput.addEventListener("click", function(event){
    console.log ("click")
    event.preventDefault ()
    genreInput.value=""
});


var genreButton=document.querySelector ("#genreButton")
var genreEl= document.querySelector("#genreListElements")
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

genreEl.addEventListener("click", function (event){
    var element=event.target
    if (element.matches ("option")){
        genreInput.value=element.textContent
    }
    genreEl.classList.add ("hide")
    genreEl.innerHTML=""

}) 

// Service box

var clearServiceInput=document.querySelector ("#clearServiceInput");
var serviceInput=document.querySelector ("#service")

clearServiceInput.addEventListener("click", function(event){
    console.log ("click")
    event.preventDefault ()
    serviceInput.value=""
});


var serviceButton=document.querySelector ("#serviceButton")
var serviceEl= document.querySelector("#serviceListElements")
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

serviceEl.addEventListener("click", function (event){
    var element=event.target
    if (element.matches ("option")){
        serviceInput.value=element.textContent
    }
    serviceEl.classList.add ("hide")
    serviceEl.innerHTML=""

}) 
