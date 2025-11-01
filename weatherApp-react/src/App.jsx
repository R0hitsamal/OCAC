import {useState, useEffect} from "react";
import weatherConditions from "/public/WeatherConditions";
function App() {
  const [city, setCity] = useState("Bhubaneswar");
  const [weatherData, setWeatherData] = useState({});

  const API_KEY = "3e47a86dcfee2bfe82ac09ecfd27676a";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const getWeatherData = async () => {
    try {
      const res = await fetch(URL);
      const JsonData = await res.json();
      let result = {
        city: city,
        feels_like: JsonData.main.feels_like,
        humidity: JsonData.main.humidity,
        temp: JsonData.main.temp,
        temp_max: JsonData.main.temp_max,
        temp_min: JsonData.main.temp_min,
        description: JsonData.weather[0].description,
        speed: JsonData.wind.speed,
        main: JsonData.weather[0].main,
      };
      setWeatherData({...weatherData, result});
    } catch (e) {
      let result = {
        city: "this location",
        feels_like: "",
        humidity: "",
        temp: "",
        temp_max: "",
        temp_min: "",
        description: "not found",
        speed: "",
      };
      setWeatherData({...weatherData, result});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    getWeatherData();
    setCity("");
  };
  useEffect(() => {
    async function render() {
      await getWeatherData();
    }
    render()
  }, []);
  //  const imgUrl = weatherConditions.find(
  //     (e) => e.main === weatherData.main
  //   );
  //   const snowImg = "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/74C8/production/_132269892_sevenoaks.jpg"
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          type="text"
          name="search"
          id="search"
          placeholder="Weather for today"
        />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      {!weatherData.result ? "loading..." : 
      <div className="infobox">
        <p>
          Weather in {weatherData.result.city} is{" "}
          {weatherData.result.description}
        </p>
        <div>
          <div>
            <p>
              {weatherData.result.city}
              <span>{weatherData.result.temp < 20 ? "🥶" : "🥵"}</span>
            </p>
            <p>
              <p> Temperature : {weatherData.result.temp}&deg;C</p>
              <p> Humidity : {weatherData.result.humidity}%</p>
              <p> Temp Min : {weatherData.result.temp_min}&deg;C</p>
              <p> Temp Max : {weatherData.result.temp_max}&deg;C</p>
              <p> Wind : {weatherData.result.speed} km/h</p>
              <p>
                The weather can be describe as{" "}
                <i>{weatherData.result.description}</i> and feels like{" "}
                {weatherData.result.feels_like}&deg;C
              </p>
            </p>
          </div>
        </div>
      </div>}
    </>
  );
}

export default App;
