var cityNameInput = document.querySelector('#selectCity');//this was cityName
var submitCityButton = document.querySelector('#submitBtn');
//var cityName = document.querySelector('#city-name');
var restoContainer = document.querySelector('#resto-container');
var restoTitle = document.querySelector('#city1');
var citySyd = document.querySelector('#selectionSydney');
var cityMelb = document.querySelector('#selectionMelbourne');
var cityBrisy = document.querySelector('#selectionBrisbane');
var cityChoice;

var locations = {
  "citySyd": 255060,
  "cityMelb" : 255100,
  "cityBrisy" : 255068,

}
// Do we need this line below? 
console.log(locations["Sydney"]);

// This function gets the users location using IP address 
const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1813231e63msh4ee73e1d7e35ebfp1ce212jsn92bc31217085',
		'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
	}
};

// This function fetches geolocation data for an IP address - extracts the locationId from the response, and then passes that ID to a searchRestaurants() function running below
fetch('https://ip-geo-location.p.rapidapi.com/ip/check?format=json', geoApiOptions)
	.then(response => response.json())
	.then(response => {
      console.log(response)
      const city = response.city.name;
      //searchRestaurants(city);
    })
	.catch(err => console.error(err));


// This code sets up the required options to the use the Trip Advisor API and search for restos in a specific location
function searchRestaurants(location)  { 
  const tripAdvisorOptions = {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': '1813231e63msh4ee73e1d7e35ebfp1ce212jsn92bc31217085',
              'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
          }
      };

  // This function makes an API request to TripAdvisor API to search for restos in a specific location 
  const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=' + location
  fetch(url, tripAdvisorOptions)
      .then(response => response.json())
      .then(data => {
      // we can do something with the response!
        if (data) {
          console.log(data.data.data);
          //renderCity(locations);
           renderResults(data.data.data);
        }
      })
      .catch(err => console.error(err));

}

// Two event listeners are placed below. One 'click' event and one 'change' event working with the dropdown options in HTML

submitCityButton.addEventListener('click', () => {
  console.log("test")
  searchRestaurants(locations[cityChoice])
  });
  
  cityNameInput.addEventListener('change', event => {
    cityChoice = event.target.value;
  });
  



// This function will render restaurant results and then start a for loop rendering more properties (opening hours, reviews and cuisineTags)

var stars = 0

function renderResults(results){
  if (results.length > 5) {
    results = results.splice(0, 5);
    console.log(results);
  }
 
  for (let i=0; i<results.length; i++) {

    var restoTitle = document.createElement("h4");
    restoTitle.textContent = "Resto Results!";
    var restoName = document.createElement("div");
    restoName.appendChild(restoTitle);
    restoName.classList = "card text-white bg-secondary mb-3 text-dark m-2";
    restoName.textContent = results[i].name;
    restoContainer.appendChild(restoName);
    var restoReview = document.createElement("h5");
    displayStars(results[i].averageRating)
    console.log(stars)
    restoReview.textContent = stars;
    restoContainer.appendChild(restoReview);

    var reviewSnipets = document.createElement("p");
    reviewSnipets.textContent = results[i].reviewSnippets.reviewSnippetsList[0];
    restoContainer.appendChild(reviewSnipets);
    
    var currentOpenStatusText = document.createElement("p");
    currentOpenStatusText.textContent = results[i].currentOpenStatusText;
    restoContainer.appendChild(currentOpenStatusText);

    var cuisineTags = document.createElement("p");
    cuisineTags.textContent = results[i].establishmentTypeAndCuisineTags[0];
    restoContainer.appendChild(cuisineTags);
  }
}

// This fun little function will display fancy stars displaying the average restaurant rating!
function displayStars(rating){
  var fullStars = Math.floor(rating);
  var halfStars = rating % 1 === 0.5 ? 1 : 0
  var emptyStars = 5 - fullStars - halfStars;

  var starOutput = "🌟".repeat(fullStars) + (halfStars ? "🌓" : "" )
  console.log(starOutput)
  stars = starOutput
  return stars
}



// 1. get user input from dropdown -- DONE
// 2. map the input to a location using the locations object -- DONE
// 3. make a request to https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport -- DONE
// 4. with the location ID present (see docs on RapidAPi) -- DONE 
// for each resturaunt in the array, show a card on the screen -- DONE











