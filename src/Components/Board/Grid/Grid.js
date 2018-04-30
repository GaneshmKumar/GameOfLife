import React, { Component } from 'react';
import './Grid.scss';

class Grid extends Component {
  _getCellStyle (cellWidth, cellHeight, cellGap, isCellAlive) {
    const styles = {
      width: `${cellWidth}px`,
      height: `${cellHeight}px`,
      margin: `${cellGap}px ${cellGap}px`
    };

    if (isCellAlive) {
      styles.background = '#FF4436';
    }

    return styles;
  }

  render () {
    const { grid, cellWidth, cellHeight, cellGap, toggleCellState } = this.props;
    const rows = grid.length;
    const cols = grid[0].length;

    return (
      <div className="grid">
        {
          (() => {
            const cells = [];
            for (let row = 0; row < rows; row += 1) {
              for (let col = 0; col < cols; col += 1) {
                cells.push(<div
                  role="button"
                  tabIndex={0}
                  className="cell"
                  style={this._getCellStyle(cellWidth, cellHeight, cellGap, grid[row][col])}
                  onClick={() => toggleCellState(row, col)}
                />);
              }
              cells.push(<br />);
            }
            return cells;
          })()
        }
      </div>
    );
  }
}

export default Grid;
