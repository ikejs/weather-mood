import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newMood } from '../../actions'

class MoodNew extends Component {
  
  constructor(props) {
    super(props) 
    this.state = {
      zip: '94108',
      mood: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.mood === '') { return }
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip}&appid=${process.env.REACT_APP_OWM}`)
      .then(response => response.json())
      .then(weather => {
        this.props.newMood({ 
          date: new Date(),
          weather,
          mood: this.state.mood
        })
        this.setState({ mood: '' })
      });
  }

  render() {
    return (
      <form 
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <input
          type="number"
          placeholder="ZIP"
          value={this.state.zip}
          onChange={(e) => this.setState({ zip: e.target.value })}
        />
        <input 
          type="text"
          placeholder="What is your mood today?"
          value={this.state.mood}
          onChange={(e) => this.setState({ mood: e.target.value })}
        />
        <button 
          type="submit"
        >
          Save
        </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = () => {
  return { newMood }
}

export default connect(mapStateToProps, mapDispatchToProps())(MoodNew)
