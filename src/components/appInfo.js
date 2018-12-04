import { Link } from 'gatsby'
import React from 'react'
import '../css/bootstrap.min.css'
import '../css/style.css'
import usageIcon from '../images/usage.svg'
import savingIcon from '../images/savings.svg'
import settingIcon from '../images/settings.svg'
import shareIcon from '../images/share.png'
import phoneFrame from '../images/phonescreenfinal.png'
import cutBillGif from '../images/Cut-your-Mobile-bill-min.gif'
import saveMoreGif from '../images/Save-more-for-your-family-min.gif'
import earnMoreGif from '../images/Earn-more-through-referal-min.gif'
import rechargeGif from '../images/recharge-min.gif'
import recommendationImage from '../images/recommendation.jpeg'
import simScreenImage from '../images/simmanagescreen.png'
import billImage from '../images/bill.jpeg'
import usageScreenImage from '../images/usagescreen.png'
 
const AppInfo = () => (
  <div>
        <div className="_container _container-appscreens hidden-xs">
          <div className="container full-h">
            <div className="row full-h">
              <div className="appscreens--col col-sm-3 col-sm-offset-8 is-relative full-h">
                <div className="appscreens-frame">
                  <div className="appscreens--phone">
                    <div className="appscreens--phone-2nd-fold cellfish">
                      <ul className="ui-screen-wrapper ui-features">
                        <li className="ui-screen ui-feature" id="ui-feature-2"><img src={recommendationImage} alt="prepaid phone plans" /></li>
                        <li className="ui-screen ui-feature" id="ui-feature-3"><img src={simScreenImage} alt="save for your family" /></li>
                        <li className="ui-screen ui-feature" id="ui-feature-4"><img src={billImage} alt="prepaid phone bill" /></li>
                        <li id="ui-feature-1" className="ui-screen ui-feature"><img src={usageScreenImage} alt="Know your usage" /></li>
                      </ul>
                    </div>
                    <div className="appscreens--phone-1st-fold cellfish">
                      <ul className="ui-screen-wrapper ui-slider">
                        <li className="ui-screen ui-slide">
                          <img src={rechargeGif} alt="Self recharging robot" />
                        </li>
                        <li className="ui-screen ui-slide">
                          <img src={cutBillGif} alt="Cut your mobile bills in half" />
                        </li>
                        <li className="ui-screen ui-slide">
                          <img src={saveMoreGif} alt="Save Money for your family" />
                        </li>
                        <li className="ui-screen ui-slide">
                          <img src={earnMoreGif} alt="Earn Every Month Through Referrals" />
                        </li>
                      </ul>
                    </div>
                    <div className="appscreens--phoneFrame">
                      <div className="appscreens--phoneFrame__wrapper">
                        <img src={phoneFrame} alt="Smart Phone" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* App Screens */}
        <div className="container full-h">
          <div className="row full-h">
            <div id="phoneScreen1" className="_container__mobile-1--outer is-table full-wh">
              <div className="mobile-1--center v-center">
                <div className="mobile-1--content col-sm-7 col-sm-offset-0 col-md-8 col-md-offset-0">
                  <div className="hidden-xs col-sm-12 col-xs-12 col-lg-12 col-md-12">
                    <div className="botTextContainer">
                      <p className="botText phoneShow text-center" id="botText1">"Help others #GetCellFish," <b>"Earn Rs.10,000"</b></p>
                      <p className="botText phoneHide text-center" id="botText2">Cut Your mobile <b>bill in half</b></p>
                      <p className="botText phoneHide  text-center" id="botText3">Help family <b>save a bundle</b></p>
                      <p className="botText  phoneHide text-center" id="botText4">Refer friends to <b>earn every month</b></p></div><br />
                    <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
                      <div className="featuresText col-sm-3 col-lg-3 col-md-3 col-xs-3 text-center"><img id="usagePic" className="featurePic" height="60px" width="70px" src={usageIcon} /><br /><br />Self Recharging Robot</div>
                      <div className=" featuresText col-sm-3 col-lg-3 col-md-3 col-xs-3 text-center"><img id="savingsPic" className="featurePic" height="60px" width="70px" src={savingIcon} /><br /><br />Cuts your bills<br />in half</div>
                      <div className=" featuresText col-sm-3 col-lg-3 col-md-3 col-xs-3 text-center"><img id="settingsPic" className="featurePic" height="60px" width="70px" src={settingIcon} /><br /><br />Saves Money for<br />Your family</div>
                      <div className=" featuresText col-sm-3 col-lg-3 col-md-3 col-xs-3 text-center"><img id="invoicePic" className="featurePic" height="60px" width="70px" src={shareIcon} /><br /><br />Earns every Month through<br />referrals</div>
                    </div>
                  </div>
                  <div id="mobileDisplayContainer" className="visible-xs">
                    <div className="col-xs-12 phoneSeparator" />
                    <div className="phone-text-wrapper">
                      <ul id="phoneTextList">
                        <li> 
                          <div className="text-center phone-text">
                            <p className="heading heading1">Understand your Usage</p>
                            <p className="sub-heading">View accurate monthly statistics for all types of calls, SMS and data usage on your phone.</p>
                          </div>  
                        </li>
                        <li> 
                          <div className="text-center phone-text">
                            <p className="heading heading2">Cut Your Bills in half</p>
                            <p className="sub-heading">Buy the right data plan and call/sms rate cutters appropriate for your usage. Even better, Cellfish will automatically manage them.</p>
                          </div>
                        </li>
                        <li> 
                          <div className="text-center phone-text">
                            <p className="heading heading3">Save for your family</p>
                            <p className="sub-heading">Automatically recharge Sims of your loved ones. Save their monthly bill too just like yours. Get notified when they need a recharge.</p>
                          </div>
                        </li>
                        <li> 
                          <div className="text-center phone-text">
                            <p className="heading heading4">Referrals every month</p>
                            <p className="sub-heading">Get onboard with our unique monthly referral system and keep earning on a monthly basis</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-xs-12 text-center">
                      <img src={phoneFrame} width="260px" />
                    </div>
                    <div className="col-xs-12 text-center gif" style={{position: 'relative', bottom: '464px', right: '7px', height: '380px', overflow: 'hidden'}}>
                      <div className="gif-wrapper" style={{height: '380px'}}>
                        <ul id="gifList">
                          <li className="gif" id="gif1"> <img id="rechargegif" width="212px" src={rechargeGif} alt="Self recharging robot" /></li>
                          <li className="gif" id="gif2"> <img id="savegif" width="212px" src={cutBillGif} alt="Cut your mobile bills in half" /></li>
                          <li className="gif" id="gif3"> <img id="familygif" width="212px" src={saveMoreGif} alt="Save money for your family" /></li>
                          <li className="gif" id="gif4"> <img id="refergif" width="212px" src={earnMoreGif} alt="Earn more through referals" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
) 

export default AppInfo 