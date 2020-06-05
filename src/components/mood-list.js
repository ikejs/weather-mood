import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment';
import { capitalize } from '../helpers'

class MoodList extends Component {

  render() {
    return (
      <div>
        {
          this.props.moods.map(day => {
            const { date, weather, mood } = day;
            return(
              <div className="card border-secondary mb-3">
                <div className="card-header">
                  <strong><Moment format="MMMM Do, YYYY">{date}</Moment></strong> &bull; {capitalize(weather.weather[0].description)}
                </div>
                <div className="card-body">
                  <h4 className="card-title"><strong>{mood}</strong></h4>
                  <p className="card-text">
                    {weather.weather[0].description}
                  </p>
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