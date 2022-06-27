import React from 'react'
import "./style.css"

const Footer = () => {
  return (
    <div className='footer-outer-container bg-grey'>
      <div className='footer-inner-container max-width'>

        <div className='footer-logo-container flex-row'>

          <img className='zomato-footer-logo' src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*'></img>

          <div className='india-english flex-row'>

            <div className='country-container flex-row'>
              <i className="india-img fas fa-flag"></i>
              <div>India</div>
              <i className="fas fa-angle-down"></i>
            </div>

            <div className='country-container flex-row'>
              <i className="english-img fas fa-globe"></i>
              <div>English</div>
              <i className="fas fa-angle-down"></i>
            </div>

          </div>
        </div>

        <div className='footer-list-container flex-row'>

          <div className='each-list'>
            <div className='footer-list-heading'>About Zomato</div>
            <div>Who we are</div>
            <div>Blog</div>
            <div>Work with us</div>
            <div>Investor</div>
            <div>Relations</div>
            <div>Report Fraud</div>
          </div>

          <div className='each-list'>
            <div className='footer-list-heading'>ZOMAVERSE</div>
            <div>Zomato</div>
            <div>Feeding India</div>
            <div>Hyperpure</div>
            <div>Zomaland</div>
          </div>

          <div className='each-list'>
            <div className='footer-list-heading'>FOR RESTAURANTS</div>
            <div>Partner with us</div>
            <div>Apps for you</div>
            <div className='footer-list-heading'>FOR ENTERPRISES</div>
            <div>Zomato for work</div>
          </div>

          <div className='each-list'>
            <div className='footer-list-heading'>Learn More</div>
            <div>Privacy</div>
            <div>Security</div>
            <div>Terms</div>
            <div>Sitemap</div>
          </div>

          <div className='each-list last-list'>
          <div className='footer-list-heading'>Social Links</div>
            <div className='flex-row social-media'>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-instagram-square"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-facebook"></i>
            </div>
            <img className='foot-img foot-img-1' alt='not found' src='https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png'></img>
            <img className='foot-img' alt='not found' src='https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png'></img>

          </div>

        </div>
      </div>
    </div>

  )
}

export default Footer