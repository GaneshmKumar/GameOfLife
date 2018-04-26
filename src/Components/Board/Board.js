import React, { Component } from 'react';
import './Board.scss';
import Control from './Control/Control';

class Board extends Component {
  constructor (props) {
    super(props);

    this.state = {
      minRows: 10,
      maxRows: 50,
      defaultRows: 10,
      rows: 10,
      minColumns: 10,
      maxColumns: 50,
      defaultColumns: 10,
      columns: 10,
      minSpeed: 1,
      maxSpeed: 10,
      defaultSpeed: 1,
      speed: 1
    };
  }

  _setRow (e) {
    let { value } = e.target;
    const { maxRows, minRows } = this.state;

    if (value < minRows) {
      value = minRows;
    }
    else if (value > maxRows) {
      value = maxRows;
    }

    this.setState({
      rows: value
    });
  }

  _setColumn (e) {
    let { value } = e.target;
    const { minColumns, maxColumns } = this.state;

    if (value < minColumns) {
      value = minColumns;
    }
    else if (value > maxColumns) {
      value = maxColumns;
    }

    this.setState({
      columns: value
    });
  }

  _setSpeed (e) {
    let { value } = e.target;
    const { minSpeed, maxSpeed } = this.state;

    if (value < minSpeed) {
      value = minSpeed;
    }
    else if (value > maxSpeed) {
      value = maxSpeed;
    }

    this.setState({
      speed: value
    });
  }

  render () {
    const {
      minRows,
      maxRows,
      defaultRows,
      rows,
      minColumns,
      maxColumns,
      defaultColumns,
      columns,
      minSpeed,
      maxSpeed,
      defaultSpeed,
      speed
    } = this.state;

    return (
      <div className="board">
        <Control
          minRows={minRows}
          maxRows={maxRows}
          defaultRows={defaultRows}
          minColumns={minColumns}
          maxColumns={maxColumns}
          defaultColumns={defaultColumns}
          minSpeed={minSpeed}
          maxSpeed={maxSpeed}
          defaultSpeed={defaultSpeed}
          setRow={e => this._setRow(e)}
          setColumn={e => this._setColumn(e)}
          setSpeed={e => this._setSpeed(e)}
        />
      </div>
    );
  }
}

export default Board;
