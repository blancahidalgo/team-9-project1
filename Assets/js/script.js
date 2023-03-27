var cityNameInput = document.querySelector('#cityInput');
var searchCityButton = document.querySelector('#submitBtn');
var cityName = document.querySelector('#city-name');
var restoContainer = document.querySelector('#resto-container');
var restoTitle = document.querySelector('#city1');

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
      searchRestaurants(city); 
    })
	.catch(err => console.error(err));


// This code sets up the required options to the use the Trip Advisor API and search for restos in a specific location
function searchRestaurants(locationId)  { 
const tripAdvisorOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bce888dda3msh2b31013f832bae2p17c202jsnf4d329f60a3b',
            'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
        }
    };

// This function makes an API request to TripAdvisor API to search for restos in a specific location 
const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query=' + locationId
fetch(url, tripAdvisorOptions)
    .then(response => response.json())
    .then(response => {
    // we can do something with the response!
    console.log(response)
    renderCity(locationId)
    })
    .catch(err => console.error(err));

}

// THIS ARE THE EVENT LISTENERS! TO RETRIEVE DATA WHEN SEARCHING FOR THE CITY/LOCATION

searchCityButton.addEventListener('click', () => {
    var locationId = cityNameInput.value.trim();
    cityNameInput.value = '';
    if (city) {
      searchRestaurants(locationId);
    }
  });
  
cityNameInput.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
      const locationID = cityNameInput.value.trim();
      if (city) {
        searchRestaurants(locationId);
    }
    }
  });

function renderCity(citySearch) {
    cityName.value = citySearch;
    console.log(citySearch);
}

// This function will render restaurant results
function renderResults(results){
restoContainer.textContent = "";
restoTitle.textContent = "Resto Results!";
var restoName = document.createElement("div");
restoName.classList = "card text-white bg-secondary mb-3 text-dark m-2";
}

// This function will run a for loop to get 5 x resto results - and then stop 
// var restoResultsFive = document.querySelector("#resto");
//     for (var i=0; i < searchRestaurants.length; i++)
//     if i = 4 {
//       console.log(forecastRes[i]);
//     }













// Previous code we copied from the Rapid API - SAVED IT DOWN HERE IN CASE WE NEED IT 

        // const geoApiOptions = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': '1813231e63msh4ee73e1d7e35ebfp1ce212jsn92bc31217085',
        //         'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
        //     }
        // };
        
        // fetch('https://ip-geo-location.p.rapidapi.com/ip/check?format=json', geoApiOptions)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));
            
        
        // const tripAdvisorOptions = {
        //         method: 'GET',
        //         headers: {
        //             'X-RapidAPI-Key': '1813231e63msh4ee73e1d7e35ebfp1ce212jsn92bc31217085',
        //             'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
        //         }
        //     };
            
        //     fetch('https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=304554', tripAdvisorOptions)
        //         .then(response => response.json())
        //         .then(response => console.log(response))
        //         .catch(err => console.error(err));
        
        
    

// // All parameters will go here

// var location = document.querySelector('latitude, longitude');
// var Sydney = document.querySelector('.1');
// var Melbourne = document.querySelector('.2');
// var Adelaide = document.querySelector('.3');
// var Perth = document.querySelector('.4');
// var Brisbane = document.querySelector('.5');
// var GoldCoast = document.querySelector('.6');
// var Darwin = document.querySelector('.7');

// var reviews = document.querySelector('rating');
// var restoSearch = document.querySelector('');
// var restoSearch = document.querySelector('');
// var restoSearch = document.querySelector('');
// var restoSearch = document.querySelector('');


// // First function here 

// function restoFinder(location) {

// }