import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import '../css/bootstrap.min.css'
import '../css/style.css'
import logo from "../images/headerlogo.png"
import playstorelogo from "../images/playstore1.png"
import playstorelogo1 from "../images/playstore_icon.png"

const Header = () => (
  <div className="example3">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar3">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand cellfish" href="http://cell.fish"><img src={logo} alt="CellFish" />
              </a>
              <div id="playstoreImageIcon" className="navbar-icon"><a href="https://cellfish.app.link/savemoney"><img style={{width: '30%', height: '30%', marginBottom: '2%', marginLeft: '15%'}} src={playstorelogo1} /></a></div>
            </div>
            <div id="navbar3" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className="text-center"><a href="./about.html">About</a></li>
                <li className="text-center"><a href="./contactus.html">Contact Us</a></li>
                <li className="text-center"><a href="./blog.html">Blog</a></li>
                <li className="text-center"><a href="./career.html">Career</a></li>
                <li className="text-center"><a href="https://cellfish.app.link/savemoney"><img id="playstoreImage" src={playstorelogo} alt="Google playstore" /></a></li>
                <li className=" visible-xs col-xs-6 col-xs-offset-3 text-center">
                  <a className="col-xs-3" href="http://www.facebook.com/TinkerixTechnology"><i className="fa headerSocialIcons"></i></a>
                  <a className="col-xs-3" href="http://www.linkedin.com"><i className="fa headerSocialIcons"></i></a>
                  <a className="col-xs-3" href="http://www.twitter.com/cellfishapp"><i className="fa headerSocialIcons"></i></a>
                  <a className="col-xs-3" href="https://www.youtube.com/channel/UCiVTDyRvsLBFes78xtobzVQ"><i className="fa headerSocialIcons"></i></a></li>
              </ul>
            </div>
            {/*/.nav-collapse */}
          </div>
          {/*/.container-fluid */}
        </nav>
      </div>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }
// 
// Header.defaultProps = {
//   siteTitle: '',
// }

export default Header
