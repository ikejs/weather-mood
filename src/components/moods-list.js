import React, { Component } from 'react'
import { connect } from 'react-redux'
import Mood from './mood/mood'

class MoodList extends Component {
  
  renderTodos() {
    const { moods } = this.props
    return moods.map((mood, i) => <Mood {...mood} key={i} />)
  }

  render() {
    return (
      <div>
        {this.renderTodos()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

export default connect(mapStateToProps)(MoodList)