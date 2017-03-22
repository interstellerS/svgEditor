import React, { Component, PropTypes } from 'react'

import './App.css'
import { DetailContainer, TreeContainer, ViewerContainer }  from 'containers'

export default class App extends Component {

    render() {
        return (
            <div className='container'>
              <div className='tree-column'>
                <TreeContainer />
              </div>
              <div className='viewer-column'>
                <ViewerContainer />
              </div>
              <div className='detail-column'>
              <DetailContainer />
              </div>
            </div>
        )
    }
}
