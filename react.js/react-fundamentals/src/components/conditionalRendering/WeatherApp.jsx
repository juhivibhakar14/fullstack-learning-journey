import {useState} from "react";

function WeatherApp(){
    const  [weather, setWeather] = useState("sunny");

    function handleClick(){
        if(weather === "sunny"){
            setWeather("cloudy");
        }
        else if(weather === "cloudy"){
            setWeather("rainy");
        }
        else if(weather === "rainy"){
            setWeather("sunny");
        }
        else{
            setWeather("sunny");
        }
    }

    return (
        <>
            <h2>Weather App</h2>
            <p>The weather is {weather}</p>
            <button onClick={handleClick}>Change Weather</button>
        </>
    );

}
export default WeatherApp;