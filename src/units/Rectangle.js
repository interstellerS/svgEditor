import React, { Component, PropTypes } from 'react'
import  SvgShape  from './SvgShape';

export default class Rectangle extends SvgShape {

    constructor( options ) {
        super ( options )
    }

    get x () {
        return this.get('x')
    }

    set x (value) {
        this.set( 'x', value )
    }

    get y () {
        return this.get('y')
    }

    set y (value) {
        this.set( 'y', value )
    }

    get width () {
        return this.get('width')
    }

    set width (value) {
        this.set( 'width', value )
    }

    get height () {
        return this.get('height')
    }

    set height (value) {
        this.set( 'height', value )
    }

    get fill () {
        return this.get('fill')
    }

    set fill (value) {
        this.set( 'fill', value )
    }


    toJSX() {
      return (
          <rect x={this.x}  y={this.y} width={this.width} height={this.height} fill={this.fill} key={ this.x + this.y } />
      )
    }

}
