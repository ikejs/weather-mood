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
        if (weather.name) {
          this.props.newMood({ 
            date: new Date(),
            weather,
            mood: this.state.mood
          })
          this.setState({ mood: '' })
        } else {
          alert('Invalid ZIP')
        }
      });
  }

  render() {
    return (
      <div className="col-md-12 pl-0 pr-0 mt-4 mb-4">
        <form className="w-100" onSubmit={(e) => this.handleSubmit(e)}>
          <div class="input-group">
            <input 
              type="number" 
              className="form-control col-sm-2"
              placeholder="ZIP"
              value={this.state.zip}
              onChange={(e) => this.setState({ zip: e.target.value })}
            />
            <input 
              type="text"
              className="form-control" 
              type="text"
              placeholder="What is your mood today?"
              value={this.state.mood}
              onChange={(e) => this.setState({ mood: e.target.value })}
            />
            <div class="input-group-append">
              <button type="submit" class="btn btn-outline-success">Save</button>
            </div>
          </div>
        </form>
      </div>
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
