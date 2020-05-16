import React, { Component } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";


const newText = () => ({
    x: 200,
    y: 20,
    text: "yo",
    x2: 300,
    y2: 30,
    text2: "howdy"
  
});

export default class App extends Component {
  state = {
    canvas: [
      {
        x: 250,
        y: 25,
        text: "hello there",
        x2: 350,
        y2: 35,
        text2: "sup"
      }
    ]
  };

  handleClick = () => {
    this.setState(prevState => ({
      canvas: [{ ...newText() }]
    }));
    console.log(this.state)
  };

  render = () => (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {this.state.canvas.map(({ x, y, text, x2, y2, text2 }, key) => (
            <>
          <Text
            key={key}
            x={x}
            y={y}
            text={text}
            onClick={this.handleClick}
          />
          <Text
            key={key}
            x={x2}
            y={y2}
            text={text2}
            onClick={this.handleClick}
          />
          </>
        ))}
      </Layer>
    </Stage>
  );
}