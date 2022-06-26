import React from 'react'
import Header from '../../common-components/Header'
import Tabs from '../../common-components/Tab-options'


const Home = () => {
  return (
    <>
    <Header/>
    <div 
      className='max-width' 
      style={{color: "rgb(130, 130, 130)",margin: "10px auto", fontSize:"13px"}}
      >
      Home / India / Kolkata / East Kolkata / <span style={{color: "var(--primary-grey)"}}>East Topsia Restaurants</span></div>
    <Tabs/>
    </>
  )
}

export default Home