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

// get user input from dropdown
// map the input to a location using the locations object
// make a request to https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport
  // with the location ID present (see docs on RapidAPi)
// for each resturaunt in the array, show a card on the screen

// Example of finding an element in an array by key
  // This could be done using the value from the user instead of
  // "Sydney" being hard coded.
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

// THIS ARE THE EVENT LISTENERS! TO RETRIEVE DATA WHEN SEARCHING FOR THE CITY/LOCATION

submitCityButton.addEventListener('click', () => {
  console.log("test")
  searchRestaurants(locations[cityChoice])
  });
  
  cityNameInput.addEventListener('change', event => {
    cityChoice = event.target.value;

   
    // if (event.key === 'click') {
    //   const locations = cityNameInput.value();
    //   if (citySyd === true) {
    //     return results;
    //   } else if (cityMelb === true) {
    //     return results;
    //   } else if (cityBrisy === true) {
    //     return results;
    //   } else {
    //     return "results not found";
    //   }
    // }
  });
  

// function renderCity(citySearch) {
//     cityName.value = citySearch;
//     console.log(citySearch);
//}

// This function will render restaurant results
function renderResults(results){
  if (results.length > 5) {
    results = results.splice(0, 5);
    console.log(results);
  }
  for (let i=0; i<results.length; i++) {
    var restoTitle = document.createElement("h5");
    restoTitle.textContent = "Resto Results!";
    var restoName = document.createElement("div");
    restoName.appendChild(restoTitle);
    restoName.classList = "card text-white bg-secondary mb-3 text-dark m-2";
    restoName.textContent = results[i].name;
    restoContainer.appendChild(restoName);
  }
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