import React, { Component } from 'react';
import './Control.scss';

class Control extends Component {
  render () {
    const {
      minRow,
      maxRow,
      defaultRow,
      minColumn,
      maxColumn,
      defaultColumn,
      minSpeed,
      maxSpeed,
      defaultSpeed
    } = this.props;

    return (
      <div className="controls">
        <div className="size-and-speed-control">
          <div className="row-group input-group">
            <label htmlFor="row">Rows</label>
            <input id="rows" type="number" min={minRow} max={maxRow} defaultValue={defaultRow} />
          </div>
          <div className="column-group input-group">
            <label htmlFor="column">Columns</label>
            <input id="column" type="number" min={minColumn} max={maxColumn} defaultValue={defaultColumn} />
          </div>
          <div className="speed-group input-group">
            <label htmlFor="speed">Speed (in seconds)</label>
            <input id="speed" type="number" min={minSpeed} max={maxSpeed} defaultValue={defaultSpeed} />
          </div>
        </div>
        <div className="play-pause-clear-control">
          <button className="play-btn btn">Play</button>
          <button className="pause-btn btn">Pause</button>
          <button className="clear-btn btn">Clear</button>
        </div>
      </div>
    );
  }
}

export default Control;
