const key = '9kmxTw106hOwBksaoMGrAJGtAQ531Xs6';

const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data =  await response.json();

    return data[0];
};


const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
<<<<<<< HEAD
=======

    // get country from the data retreived
    
    
>>>>>>> 3ea11c5c385ffcc0c768faeb1cc1056a88ad92ac
    const response = await fetch(base + query);
    const data =  await response.json();
        
   

    var countryName = data[0].Country.EnglishName;
    // console.log(countryName);
    getPicture(countryName);

    return (data[0]);

};


function getPicture(countryName){
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(response => response.json())
        .then(data =>{
            
            let result = data[0];
            console.log(result);
            document.body.style.backgroundImage = `url(${result.flag})`;
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "cover";
            
        })
    .catch(err => console.log(err))};
    