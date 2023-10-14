import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: null,
      colors: ['#FF0000', 'green', 'blue', 'yellow', '#E75480', 'cyan', 'orange', 'purple', '#FFB6C1', '#BAB86C', '#F88379', '#40E0D0', '#6E260E', '#F28C28', '#7393B3', '#FDDA0D'],
    };
  }

  handleColorSelect = (color) => {
    this.setState({ selectedColor: color });
  };

  render() {
    const { selectedColor, colors } = this.state;

    return (
      <div>
        <h1><b>Color Picker</b></h1>
        <div className="color-display" style={{ backgroundColor: selectedColor }}>
        <div className="color-palette">
          {colors.map((color, index) => (
            <button
              key={index}
              className={`color-button ${color === selectedColor ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => this.handleColorSelect(color)}
            ></button>
          ))}
        </div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;