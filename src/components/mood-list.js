import React, { Component } from 'react'
import { connect } from 'react-redux'
import Mood from './mood/mood'

class MoodList extends Component {

  render() {
    return (
      <div>
        {
          this.props.moods.map(day => {
            const { date, weather, mood } = day;
            return( 
              <div>
                <h3>{JSON.stringify(date)}</h3>
                <p>{JSON.stringify(weather.main)}</p>
                <p><b>Mood: </b>{mood}</p>
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