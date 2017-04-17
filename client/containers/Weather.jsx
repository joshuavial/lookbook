import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchWeather} from '../actions'

const Weather = (props) => {
  return (
    <div>
        <p>The weather today is:</p>
        <input
          type="text"
          list="cities"
          placeholder="Enter your city .."
          onKeyUp={ e => { showWeather(e, props.dispatch)}}
        />

      <datalist id="cities">
          <option value="Lima" />
          <option value="NewYork" />
          <option value="Cusco" />
          <option value="Wellington" />
          <option value="Auckland" />
          <option value="Melbourne" />
          <option value="Sydney" />
          <option value="London" />
          <option value="Huancayo" />
          <option value="Atlanta" />
          <option value="Gisbourne" />
          <option value="Christchurch" />
      </datalist>

      <p>City Name: {props.weatherData.name}</p>
      <p>Forecast: {props.weatherData.weather ? props.weatherData.weather[0].main : ""}</p>
      <p>Description: {props.weatherData.weather ? props.weatherData.weather[0].description : ""}</p>
      <p>icon: {props.weatherData.weather ? props.weatherData.weather[0].icon : ""}</p>
      <p>Temperature: {props.weatherData.main ? Math.floor(props.weatherData.main.temp) : ""}°C</p>
    </div>
  )
}

function showWeather (e, dispatch) {
  console.log(e.currentTarget.value)
  if (e.keyCode === 13) {
    dispatch(fetchWeather(e.currentTarget.value.toLowerCase()))
    e.currentTarget.value = ''
  }
}

const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherData
  }
}

export default connect(mapStateToProps)(Weather)
