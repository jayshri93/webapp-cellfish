import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'
import './layout.css'
import AppInfo from './appInfo'

class Layout extends Component {
  render() {
    return(
    <div>
      <Header />
      <div className="marginClass">
      
      </div>
      <AppInfo/>
      <Footer/>
    </div>
  )
  }

}
    

export default Layout
