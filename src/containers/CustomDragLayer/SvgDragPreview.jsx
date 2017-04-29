import React, { Component, PropTypes } from "react";
import shouldPureComponentUpdate from "./shouldPureComponentUpdate";
import setIntervalDecorator from "helpers/decorators";

const styles = {
  display: "inline-block"
};
const stylesDiv = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  cursor: "move"
};

@setIntervalDecorator
export default class SvgDragPreview extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = { tickTock: false };
  }

  componentDidMount() {
    this.props.onSetInterval(this.tick, 500);
  }

  tick() {
    console.log("tick .. ");
    this.setState({ tickTock: !this.state.tickTock });
  }

  render() {
    const { title } = this.props;
    const { tickTock } = this.state;
    const backgroundColor = tickTock ? "yellow" : "white";
    return (
      <div style={styles}>
        <div style={{ ...stylesDiv, backgroundColor }} />
      </div>
    );
  }
}
