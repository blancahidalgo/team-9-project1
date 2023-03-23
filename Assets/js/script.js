// // Variables with API Key's and API Url's
// var geoApiKey = '1813231e63msh4ee73e1d7e35ebfp1ce212jsn92bc31217085';
// var geoApiUrl = 'ip-geo-location.p.rapidapi.com';

// var tripAdvisorApiKey = '1813231e63msh4ee73e1d7e35ebfp1ce212jsn92bc31217085';
// var tripAdvisorApiUrl = 'tripadvisor16.p.rapidapi.com';


const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1813231e63msh4ee73e1d7e35ebfp1ce212jsn92bc31217085',
		'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
	}
};

fetch('https://ip-geo-location.p.rapidapi.com/ip/check?format=json', geoApiOptions)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    

const tripAdvisorOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1813231e63msh4ee73e1d7e35ebfp1ce212jsn92bc31217085',
            'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
        }
    };
    
    fetch('https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport?query=london', tripAdvisorOptions)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));



















// // All parameters will go here

// var restoSearch = document.querySelector('location');
// var restoSearch = document.querySelector('');
// var restoSearch = document.querySelector('');
// var restoSearch = document.querySelector('');
// var restoSearch = document.querySelector('');
// var restoSearch = document.querySelector('');


// // First function here 

// function restoFinder(location) {

// }
