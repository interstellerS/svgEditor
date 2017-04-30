import React, { Component, PropTypes } from "react";
import { SvgShape } from "units";
import shouldPureComponentUpdate from "./shouldPureComponentUpdate";
import setIntervalDecorator from "helpers/decorators";
import { ORIENTATION } from "redux/constants/dndConstants";

function getItemCoordiante(currentOffset, initialOffset, item) {
  let point;
  switch (item.data.orientation) {
    case ORIENTATION.NORD:
    case ORIENTATION.SUD:
      point = { x: initialOffset.x, y: currentOffset.y };
      break;
    case ORIENTATION.EST:
    case ORIENTATION.WEST:
      point = { x: currentOffset.x, y: initialOffset.y };
      break;
    default:
  }
  return point;
}
@setIntervalDecorator
export default class EdgeDragPreview extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = { tickTock: false };
  }

  static propTypes = {
    item: PropTypes.object,
    itemType: PropTypes.string,
    initialOffset: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }),
    currentOffset: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    })
  };

  componentDidMount() {
    this.props.onSetInterval(this.tick, 400);
  }

  tick() {
    console.log("tick .. ");
    this.setState({ tickTock: !this.state.tickTock });
  }

  render() {
    const { tickTock } = this.state;
    const { currentOffset, initialOffset, item, ...rest } = this.props;
    if (!currentOffset || !initialOffset) return null;
    const point = getItemCoordiante(currentOffset, initialOffset, item);
    const styles = {
      box: {
        position: "fixed",
        pointerEvents: "none",
        zIndex: 100,
        left: `${point.x}px`,
        top: `${point.y}px`,
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        transition: "border 0.1s linear, boxShadow 0.1s linear"
      },
      borderNormal: {
        borderColor: "#2b90d9",
        border: "1px solid transparent",
        boxShadow: "none"
      },
      borderGlowing: {
        borderColor: "#2b90d9",
        border: "2px solid ",
        boxShadow: "0 0 5px #2b90d9"
      },
      inner: {
        backgroundColor: "#30A9DE",
        borderRadius: "50%",
        opacity: 0.9,
        width: "100%",
        height: "100%"
      }
    };
    const stylesActive = tickTock ? styles.borderGlowing : styles.borderNormal;
    return (
      <div style={Object.assign({}, styles.inner, stylesActive, styles.box)}>
        <div style={styles.inner} />
      </div>
    );
  }
}
