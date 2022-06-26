import React from 'react'
import ExploreCard from './exploreCard'
import "./exploreSection.css"

const ExploreSection = ({list, exploreTitle}) => {
  return (<>
    <div className='title max-width'>{exploreTitle}</div>
    <div className='max-width explore-section-container'>
      {list.map((restaurent,index)=>{
        return <ExploreCard id={index} key={index} restaurent={restaurent}/>
      })}
    </div>
    </>
  )
}

export default ExploreSection