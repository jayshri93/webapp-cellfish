import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import '../css/bootstrap.min.css'
import '../css/style.css'
import facebookIcon from "../images/Facebook.png"
import twitterIcon from "../images/Twitter.png"
import googleIcon from "../images/Google+.png"
import youtubeIcon from '../images/Youtube.png'

const Footer = () => (
  <div>
        <div className="hidden-xs footerSeparator col-sm-12 col-md-12 col-lg-12" />
        <div className="homeFooter hidden-xs col-sm-12 col-md-12 col-lg-12">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" />
          <div className="footerWrapper col-xs-11 col-sm-11 col-lg-11 col-md-11">
            <div className="col-sm-2 col-xs-12 col-md-2 col-lg-2">
              <div className="footer-col-head">Support</div>
              <div id="git" className="footer-col">
                <ul className="unstyled">
                  <li className="footer-col-item"><a href="./faq.html">FAQ</a></li>
                  <li className="footer-col-item"><a href="./contactus.html">Contact Us</a></li>
                  <li className="footer-col-item"><a href="#">{/*Feedback*/}</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2 col-xs-12 col-md-2 col-lg-2">
              <div className="footer-col-head">Legal</div>
              <div className="footer-col">
                <ul className="unstyled">
                  <li className="footer-col-item"><a href="./termsandconditions.html">Terms and Conditions</a></li>
                  <li className="footer-col-item"><a href="./privacypolicy.html">Privacy</a></li>
                  <li className="footer-col-item"><a href="./refunds.html">Refund</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2 col-xs-12 col-md-2 col-lg-2">
              <div className="footer-col-head">Our Company</div>
              <div id="serv" className="footer-col">
                <ul className="unstyled">
                  <li className="footer-col-item"><a href="./about.html">About Us</a></li>
                  <li className="footer-col-item"><a href="./career.html">Careers</a></li>
                  <li className="footer-col-item"><a href="#">{/*Investor Relationships*/}</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2 col-xs-12 col-md-2 col-lg-2">
              <div className="footer-col-head">Resources</div>
              <div id="last" className="footer-col">
                <ul className="unstyled">
                  <li className="footer-col-item"><a href="./blog.html">Blog</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4 hidden-xs col-md-3 col-lg-3">
              <iframe id={1} src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTinkerixTechnology&tabs=timeline&width=271&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" width="100%" height={300} style={{overflow: 'hidden'}} scrolling="no" frameBorder={0} allowTransparency="true" />
            </div>            </div>
        </div>
        <div className="col-xs-12 visible-xs">
          <button className="accordion">Support</button>
          <div className="panel">
            <ul className="unstyled">
              <li className="footer-col-item"><a href="./faq.html">FAQ</a></li>
              <li className="footer-col-item"><a href="./contactus.html">Contact Us</a></li>
              <li className="footer-col-item"><a href="#">{/*Feedback*/}</a></li>
            </ul>
          </div>
          <button className="accordion">Legal</button>
          <div className="panel">
            <ul className="unstyled">
              <li className="footer-col-item"><a href="./termsandconditions.html">Terms and Conditions</a></li>
              <li className="footer-col-item"><a href="./privacypolicy.html">Privacy</a></li>
              <li className="footer-col-item"><a href="./refunds.html">Refund</a></li>
            </ul>
          </div>
          <button className="accordion">Our Company</button>
          <div className="panel">
            <ul className="unstyled">
              <li className="footer-col-item"><a href="./about.html">About Us</a></li>
              <li className="footer-col-item"><a href="./career.html">Careers</a></li>
              <li className="footer-col-item"><a href="#">{/*Investor Relationships*/}</a></li>
            </ul>
          </div>
          <button className="accordion">Resources</button>
          <div className="panel">
            <ul className="unstyled">
              <li className="footer-col-item"><a href="./blog.html">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="footerCopyright text-center">
          <br />Connect with Us: <a href="http://www.facebook.com/TinkerixTechnology"><img width="50px" src={facebookIcon} alt="Cellfish on Facebook" />&nbsp;</a><a href="http://www.twitter.com/cellfishapp"> <img width="50px" src={twitterIcon} alt="Cellfish on Twitter" />&nbsp;</a> <a href="https://www.youtube.com/channel/UCiVTDyRvsLBFes78xtobzVQ"><img width="50px" src={youtubeIcon} alt="Cellfish on youtube" /></a> <br /><br />
          <div className="footerCopyright text-center">
            Copyright Tinkerix Technology Pvt Ltd</div>
        </div>
      </div>
  )
  export default Footer