import React, { Component } from 'react';
import './Board.scss';
import Control from './Control/Control';

class Board extends Component {
  constructor (props) {
    super(props);

    this.state = {
      minRow: 10,
      maxRow: 50,
      defaultRow: 10,
      minColumn: 10,
      maxColumn: 50,
      defaultColumn: 10,
      minSpeed: 1,
      maxSpeed: 10,
      defaultSpeed: 1
    };
  }

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
    } = this.state;

    return (
      <div className="board">
        <Control
          minRow={minRow}
          maxRow={maxRow}
          defaultRow={defaultRow}
          minColumn={minColumn}
          maxColumn={maxColumn}
          defaultColumn={defaultColumn}
          minSpeed={minSpeed}
          maxSpeed={maxSpeed}
          defaultSpeed={defaultSpeed}
        />
      </div>
    );
  }
}

export default Board;
