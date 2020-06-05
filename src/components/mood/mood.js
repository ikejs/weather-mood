import React, { Component } from 'react'

class Mood extends Component {

  render() {
    const { date, weather, mood } = this.props

    return (
      <div>
        <h1>{date} - {mood}</h1>
        <p>{weather}</p>
      </div>
    )
  }
}

export default Mood;