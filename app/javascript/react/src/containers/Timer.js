import React, { Component } from 'react';

class Timer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 1
    }
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  tick () {
    this.setState({count: (this.state.count + 1)})
  }

  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }

  stopTimer () {
    clearInterval(this.timer)
  }

  render () {
    let startTimer = (event) => this.startTimer(event);
    let stopTimer = (event) => this.stopTimer(event);

    return (
      <div className='timer'>
        <h1>{this.state.count}</h1>
        <div>
          <button onClick={startTimer}>Start</button>
          <button onClick={this.stopTimer}>Stop</button>
        </div>
      </div>
    )
  }
}

export default Timer;
