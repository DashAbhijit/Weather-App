import React from "react";
import "./index.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: 0,
      lat: 0,
      long: 0,
      wind: 0,
      humidity: 0,
      feelsLike: 0,
      city: "Bangalore",
      weatherType: "",
      wind_direction:0,
      pressure:0,
      sea_level:0,
      time:"",
      visibility:0,
    };
  }

  componentDidMount() {
    this.getData("Delhi");
  }

  getData = (value) => {
    fetch(
      "http://api.weatherstack.com/current?access_key=9b9ea547bea391aa39590dd82a0f14bb&query="+value
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          temperature: json.current.temperature,
          humidity: json.current.humidity,
          feelsLike: json.current.feelslike,
          lat: json.location.lat,
          long: json.location.lon,
          wind: json.current.wind_speed,
          city: value,
          weatherType: json.current.weather_descriptions[0],
          wind_direction: json.current.wind_dir,
          pressure:json.current.pressure,
          visibility: json.current.visibility,
          time:json.current.observation_time,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div>
        <h1>WEATHER APP</h1>
        <div
          className="city"
          onClick={() => {
            this.getData("Bangalore");
          }}
        >
          Bangalore
        </div>
        <div
          className="city"
          onClick={() => {
            this.getData("Delhi");
          }}
        >
          Delhi
        </div>
        <div
          className="city"
          onClick={() => {
            this.getData("Mumbai");
          }}
        >
          Mumbai
        </div>

        <div className="container">
          {/* WEATHER COMPONENT */}
          <div className="weather">
            <div className="container-inner">
              {/* LEFT SIDE CONTENT */}
              <div className="content-inner left-side">
                <span className="primary">{this.state.city}</span>
                <br />
                <span className="secondary">as of {this.state.time}</span>
                <br />
                <br />

                <span className="temp">{this.state.temperature}</span>
                <br />
                <br />

                <span className="primary">{this.state.weatherType}</span>
                <br />
                <span className="secondary">42% chance of rain</span>
                <br />
              </div>
              {/* RIGHT SIDE CONTENT */}
              <div className="content-inner right-side">
                <span className="primary">{this.state.humidity}</span>
                <br />
                <span className="secondary">Humidity</span>
                <br />
                <br />

                <span className="primary">{this.state.feelsLike}</span>
                <br />
                <span className="secondary">Feels like</span>
                <br />
                <br />

                <span className="primary">{this.state.wind}</span>
                <br />
                <span className="secondary">wind</span>
                <br />
                <br />
              </div>
            </div>
          </div>

          {/* DETAILS COMPONENT */}
          <div className="details">
            <div className="container-inner">
              {/* LEFT SIDE CONTENT */}
              <div className="content-inner">
                <br />
                <br />
                <span className="primary">
                  {this.state.lat} , {this.state.long}
                </span>
                <br />
                <span className="secondary">Location</span>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <span className="primary">{this.state.wind_direction}</span>
                <br />
                <span className="secondary">Wind Direction</span>
                <br />
                <br />
              </div>

              {/* RIGHT SIDE CONTENT */}
              <div className="content-inner right-inner">
                <br />
                <br />

                <span className="primary">{this.state.pressure}</span>
                <br />
                <span className="secondary">pressure</span>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <span className="primary">{this.state.visibility}</span>
                <br />
                <span className="secondary">Visibility</span>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
