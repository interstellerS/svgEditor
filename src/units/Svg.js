import React, { Component, PropTypes } from 'react'
import  SvgShape  from './SvgShape';

export default class Svg extends SvgShape {

    constructor( options) {
        super ( options )
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
    
}
