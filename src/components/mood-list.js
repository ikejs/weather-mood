import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment';
import { capitalize, toFahrenheit } from '../helpers'

class MoodList extends Component {

  render() {
    return (
      <div>
        {
          this.props.moods.map(day => {
            const { date, weather, mood } = day;
            return(
              <div className="card border-secondary mb-3">
                <div className="card-header text-center">
                  <strong><Moment format="MMMM Do, YYYY">{date}</Moment></strong> &bull; {weather.name}
                </div>
                <div className="card-body">
                  <h4 className="card-title text-center text-muted"><strong>{mood}</strong></h4>
                  <table class="table table-sm borderless">
                    <thead>
                      <tr>
                        <th scope="col">Temp</th>
                        <th scope="col">Description</th>
                        <th scope="col">Wind</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Current: <strong>{toFahrenheit(weather.main.temp)}°</strong></td>
                        <td>{capitalize(weather.weather[0].description)}</td>
                        <td><strong>{weather.wind.speed}</strong> mph</td>
                      </tr>
                      <tr>
                        <td>Feels Like: <strong>{toFahrenheit(weather.main.feels_like)}°</strong></td>
                        <td></td>
                        <td><strong>{weather.wind.deg}</strong> deg</td>
                      </tr>
                      <tr>
                        <td>High: <strong>{toFahrenheit(weather.main.temp_max)}°</strong></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Low: <strong>{toFahrenheit(weather.main.temp_min)}°</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return { ...state }
}

export default connect(mapStateToProps)(MoodList)