import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Tree } from "components";
import { Svg } from "units";
import { selectItem } from "redux/actions/svgActions";

class TreeContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    const { dispatch } = this.props;
    dispatch(selectItem(item));
  }

  render() {
    const { svg } = this.props;
    return (
      <ol ref="treeContainer" className="tree">
        <Tree {...this.props} handleClick={this.handleClick} />
      </ol>
    );
  }
}

TreeContainer.propTypes = {
  svg: PropTypes.instanceOf(Svg).isRequired
};

function mapStateToProps(state) {
  return state.svg;
}

export default connect(mapStateToProps)(TreeContainer);
