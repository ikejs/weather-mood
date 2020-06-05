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
                  <table class="table table-sm">
                    <tbody>
                      <tr>
                        <td>{toFahrenheit(weather.main.temp)}</td>
                        <td>{capitalize(weather.weather[0].description)}</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
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