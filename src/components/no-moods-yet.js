import React, { Component } from 'react';
import { connect } from 'react-redux';


class NoMoodsYet extends Component {
  render() {

    const mood = this.props.mood.mood;
    const fancyMood = !mood.length ? '...' : mood;

    return(
      <div>
        <h3 className="text-center">I am feeling <strong>{fancyMood}</strong> today.</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

export default connect(mapStateToProps)(NoMoodsYet)