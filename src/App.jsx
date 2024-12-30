import { useState, useRef } from "react";
import axios from "axios"

import "./App.css";
import WeatherInform from "./components/wheatherinform/Weatherinform";
import WeatherInform5Days from "./components/wheatherinform/Weatherinform5Days/WeatherInform5Days";

function App() {
  const [weather, setWeather] = useState();
  const [weather5Days, setWeather5Days] = useState();
  const inpuRef = useRef();

  async function searchCity(){
    const city = inpuRef.current.value
    const Key = "3fb56ba3a5edeffa010c06dc540bf497"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&lang=pt_br&units=metric`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Key}&lang=pt_br&units=metric`
    
    
    
    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5Days)
    
    setWeather5Days(apiInfo5Days.data)
    setWeather(apiInfo.data)

   
  }

  return (
    <div className="container">
      <h1>Previsão do Tempo</h1>
      <input ref={inpuRef} type="Text" placeholder="Digite o nome da cidade" />
      <button onClick={searchCity}>Buscar</button>


      {weather && <WeatherInform weather={weather} />}
      {weather5Days && <WeatherInform5Days  weather5Days={weather5Days}/>}
    </div>
  );
}

export default App;


