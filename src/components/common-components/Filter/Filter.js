import React from 'react'
import "./style.css"

const Filter = ({content}) => {
  return (
    <div className='po-sticky'>
    <div className='flex-row filter-container max-width '>
        {content && content.map((item)=>{
            return (
                <div className='cur-po flex-row each-filter-container' id={item.id} key={item.id}>
                    <div className='filter-icon'>{item.icon && item.icon}</div>
                    <div className='filter-name'>{ item.name }</div>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default Filter