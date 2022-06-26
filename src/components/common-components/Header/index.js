import React from 'react'
import "./style.css"


const Header = () => {
  return (
    <>
      <div className='header max-width'>
        <img className='zomato-logo' src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='zomato-logo'></img>

        <div className='right-header flex-row'>

          <div className='left-header-search flex-row'>

            <div className='your-location flex-row'>
              <i className="fas fa-map-marker-alt"></i>
              <span>Mirania Gardens, East Top</span>
              <i className="fas fa-caret-down"></i>
            </div>


            <div className='divider'></div>

            <div className='search-space flex-row'>
              <i className="fas fa-search"></i>
              <input autoComplete='off' type="text" placeholder='Search for resturent, cuisine or a dish.'></input>
            </div>

          </div>

          <div className='right-header-profile flex-row'>
            <img className='profile-pic' alt="profile-pic" src="https://b.zmtcdn.com/images/user_avatars/wine_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"></img>
            <span>Niraj</span>
            <i className="fas fa-angle-down"></i>
          </div>

        </div>
      </div>

    </>
  )
}

export default Header;