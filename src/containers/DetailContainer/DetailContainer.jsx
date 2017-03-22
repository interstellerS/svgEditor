import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Toolbar } from 'components'

class DetailContainer extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
          <p> DETAILS </p>
        )
    }
}

function mapStateToProps(state) {
  return state.svg
}

export default connect(mapStateToProps)(DetailContainer)
