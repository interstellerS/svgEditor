import React, { Component, PropTypes } from "react";

let setIntervalDecorator = ComposedComponent =>
  class extends React.Component {
    componentWillMount() {
      this.set = [];
    }
    setInterval() {
      this.set.push(setInterval.apply(null, arguments));
    }
    componentWillUnmount() {
      this.set.forEach(clearInterval);
    }
    render() {
      return (
        <ComposedComponent
          {...this.props}
          onSetInterval={this.setInterval.bind(this)}
        />
      );
    }
  };

export default setIntervalDecorator;
