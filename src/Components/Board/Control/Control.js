import React, { Component } from 'react';
import './Control.scss';

class Control extends Component {
  render () {
    const {
      minRows,
      maxRows,
      defaultRows,
      minColumns,
      maxColumns,
      defaultColumns,
      minSpeed,
      maxSpeed,
      defaultSpeed,
      setRow,
      setColumn,
      setSpeed
    } = this.props;

    return (
      <div className="controls">
        <div className="size-and-speed-control">
          <div className="row-group input-group">
            <label htmlFor="row">Rows</label>
            <input
              id="rows"
              type="number"
              min={minRows}
              max={maxRows}
              defaultValue={defaultRows}
              onChange={setRow}
            />
          </div>
          <div className="column-group input-group">
            <label htmlFor="column">Columnss</label>
            <input
              id="column"
              type="number"
              min={minColumns}
              max={maxColumns}
              defaultValue={defaultColumns}
              onChange={setColumn}
            />
          </div>
          <div className="speed-group input-group">
            <label htmlFor="speed">Speed</label>
            <input
              id="speed"
              type="number"
              min={minSpeed}
              max={maxSpeed}
              defaultValue={defaultSpeed}
              onChange={setSpeed}
            />
          </div>
        </div>
        <div className="play-pause-clear-control">
          <button className="play-btn btn btn-success">Play</button>
          <button className="pause-btn btn btn-warning">Pause</button>
          <button className="clear-btn btn btn-danger">Clear</button>
        </div>
      </div>
    );
  }
}

export default Control;
