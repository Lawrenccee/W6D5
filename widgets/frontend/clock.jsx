import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();

    this.state = {
      time: new Date()
    };

    this.tick = this.tick.bind(this);
  }

  tick(){
    this.setState({time: new Date()});
  }

  componentDidMount(){
    this.id = setInterval(this.tick,1000);
  }

  componentWillUnmount(){
    clearInterval(this.id);
    this.id = 0;
  }

  render() {
    const time = this.state.time.toTimeString().slice(0, 9) +
      this.state.time.toTimeString().slice(19).replace(')', '');
    const date = this.state.time.toDateString();
    return (
      <div className="clock-container">
        <h1>Clock</h1>
        <main>
          <p><span>Time: <strong>{time}</strong></span></p>
          <p><span>Date: <strong>{date}</strong></span></p>
        </main>
      </div>
    );
  }
}

export default Clock;
