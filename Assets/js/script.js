// This function gets the users location using IP address 
const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1813231e63msh4ee73e1d7e35ebfp1ce212jsn92bc31217085',
		'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
	}
};

// Line 14 onwards --> call function to search for restaurants near your pinned IP location 
fetch('https://ip-geo-location.p.rapidapi.com/ip/check?format=json', geoApiOptions)
	.then(response => response.json())
	.then(response => {
      const locationId = response.geoData.city.id;
      searchRestaurants(locationId); 
    })
	.catch(err => console.error(err));


    
// Search for restaurants in the pinned location starts here 
function searchRestaurants(locationId)  { 
const tripAdvisorOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1813231e63msh4ee73e1d7e35ebfp1ce212jsn92bc31217085',
            'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
        }
    };

// This function will provide restaurant reviews nearby this location previously pinned!
const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=304554'
fetch(url, tripAdvisorOptions)
    .then(response => response.json())
    .then(response => {
    // we can do something with the response!
    }
    .catch(err => console.error(err));

}










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
