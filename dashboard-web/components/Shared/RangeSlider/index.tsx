import React, { Component, ChangeEvent } from 'react';

interface RangeSliderState {
  value: number;
}

class RangeSlider extends Component<{}, RangeSliderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value: 100,
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: +event.target.value });
  };

  render() {
    const min = 100;
    const max = 1000;
    const step = 100;
    const minPos = ((this.state.value - min) / (max - min)) * 100;

    return (
      <div className="wrapper">
        <div className="input-wrapper">
          <input
            className="input"
            type="range"
            value={this.state.value}
            min={min}
            max={max}
            step={step}
            onChange={this.handleChange}
          />
        </div>

        <div className="control-wrapper">
          <div className="control" style={{ left: `${minPos}%` }} />
          <div className="rail">
            <div className="inner-rail" style={{ left: `${minPos}%`, right: `${100 - minPos}%` }} />
          </div>
        </div>
        <p>The max value is: <span>{this.state.value}</span></p>
      </div>
    );
  }
}

export default RangeSlider;
