const cityForm = document.querySelector("form");
const card = document.querySelector('.card');
const cardPosi = document.querySelector('.card-position');
const details = document.querySelector('.details');
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
const backGround = document.querySelector(".back-pic");
const coou = document.querySelector(".coo");
const flagsPosition = document.querySelector(".flags");


const updateUI = (data) => {

    const cityDets = data.cityDets;
    const weather = data.weather;
    // setTimeout(()=>{
    details.innerHTML = `
    <h5 class="my-3" id="city-name">${cityDets.EnglishName}</h5>
    <div class="my-3" id="weather-name">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span id="degree">${weather.Temperature.Metric.Value}</span>
        <span id="c">&deg;C</span>
    </div>
    `;
// }, 1000);
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
        icon.setAttribute("src",iconSrc);

    if(weather.Temperature.Metric.Value < 15){
        document.querySelector("#degree").style.color ="#00a0de";
    }else if(weather.Temperature.Metric.Value < 25){
        document.querySelector("#degree").style.color ="blue";
    }else {
        document.querySelector("#degree").style.color ="#e60012";
    }

    console.log(weather);
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

   coou.style.display ="none"; 
   
   
   if( cardPosi.classList.contains('d-none')){
    cardPosi.classList.remove('d-none');
}   
        const test = document.querySelector(".card-position");
    if((weather.IsDayTime === false) && (weather.WeatherText === "Clear" )|| (weather.WeatherText === "Mostly Clear")  ){
        test.style.backgroundImage = "url('/img/icons/full-moon-4327672_1920.jpg')";
        document.querySelector("#weather-name").style.color ="gold";
        document.querySelector("#c").style.color ="silver";
        weather.WeatherText.style.color = "yellow";}
        else if((weather.IsDayTime === false)  ){
            document.querySelector("#weather-name").style.color ="silver";
            test.style.backgroundImage = "url('/img/icons/night4.jpeg')";
            document.querySelector("#c").style.color ="yellow";}
        else if((weather.IsDayTime === true) && (weather.WeatherText === "Mostly cloudy" )|| (weather.WeatherText === "Cloudy") || (weather.WeatherText === "Dreary")|| (weather.WeatherText === "Dreary")|| (weather.WeatherText === "Clouds and sun") ){
            test.style.backgroundImage = "url('/img/icons/nature-3294543_1920.jpg')";
            document.querySelector("#weather-name").style.color ="black";
        }
        
        
            else if((weather.IsDayTime === true) && (weather.WeatherText === "Sunny" )|| (weather.WeatherText === "Mostly sunny") || (weather.WeatherText === "Partly sunny")|| (weather.WeatherText === "Intermittent clouds") ){
                document.querySelector("#weather-name").style.color ="orange";
                test.style.backgroundImage = "url('/img/icons/sunny.jpg')";}

                else if((weather.IsDayTime === true) && (weather.WeatherText === "Showers" )|| (weather.WeatherText === "Rain") || (weather.WeatherText === "Ice")|| (weather.WeatherText === "Partly Sunny w/ Showers") || (weather.WeatherText === "Partly Sunny w/ Showers") || (weather.WeatherText === "Light rain") || (weather.WeatherText === "Freezing Rain")|| (weather.WeatherText === "Mist")){
                    document.querySelector("#weather-name").style.color ="blue";
                    test.style.backgroundImage = "url('/img/icons/rain-315446.jpg')";} 

                    else if((weather.IsDayTime === true) && (weather.WeatherText === "T-storms" )
                     ){
                        test.style.backgroundImage = "url('/img/icons/flash-2568381_1920.jpg')";}
                        else if((weather.IsDayTime === true)){
                            test.style.backgroundImage = "url('/img/icons/cloudy')";} }

    // }else if((weather.IsDayTime === true) && () ){
    //     test.style.backgroundImage = "url('/img/icons/blue_sky.jpeg')";
    // }




    // let timeSrc = null;
    // if(weather.IsDayTime){
    //     timeSrc = "img/icons/blue_sky.jpeg";
    // }else{
    //     timeSrc = "img/night.svg";
    // }
    // time.setAttribute("src", timeSrc);
   
    


const updateCity  = async (city) => {

const cityDets = await getCity(city);
const weather = await getWeather(cityDets.Key);


return {
    cityDets: cityDets,
    weather: weather 
};


};
cityForm.addEventListener("submit", e =>{
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city).then(data =>{
        updateUI(data)
        
    }).catch(err => {
        console.log(err);
    })
});
