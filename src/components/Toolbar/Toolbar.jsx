import React, { PropTypes, Component } from 'react'

import './Toolbar.css'
import { ColorSelector, InputEditor , RangeEditor  }  from 'components'
import * as colors from 'data/colors';

class Toolbar extends Component {
    constructor(props) {
        super(props)
    }

      render() {
          return (
            <div className='toolContainer' >
                <div className='row'>
                    <ColorSelector
                        label="color :"
                        color={this.props.color}
                        pallete={colors}
                        onColorChange={this.props.onColorChange}
                    />
                </div>
                <div className='row'>
                    <InputEditor
                        label="Text :"
                        text={this.props.text}
                        onChange={this.props.onTextChange}
                        placeholder="Text"
                    />
                </div>
                <div className='row'>
                    <RangeEditor
                        label="Radius"
                        value={this.props.radius}
                        onChange={this.props.onRadiusChange}
                        placeholder="Radius"
                    />
                </div>
                <div className='row'>
                    <RangeEditor
                        label="X"
                        value={this.props.x}
                        onChange={this.props.onXChange}
                        placeholder="X"
                    />
                </div>
                <div className='row'>
                    <RangeEditor
                        label="Y"
                        value={this.props.y}
                        onChange={this.props.onYChange}
                        placeholder="Y"
                    />
                </div>
            </div>
          )
      }
}

Toolbar.propTypes = {
  color: PropTypes.string.isRequired,
  radius: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

export default Toolbar
