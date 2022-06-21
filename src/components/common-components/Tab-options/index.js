import React, { useState } from 'react'
import "./style.css";

const tabContent = [
    {
        id: 1,
        // acitveColor: {backgroundColor: "rgb(252, 238, 192)"},
        activepic: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
        inActivepic: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
        title: "Delivery",
    },
    {
        id: 2,
        // acitveColor: {backgroundColor: "rgb(252, 238, 192)"},
        activepic: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
        inActivepic: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
        title: "Dining Out",
    },
    {
        id: 3,
        // acitveColor: {backgroundColor: "rgb(252, 238, 192)"},
        activepic: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
        inActivepic: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
        title: "Nightlife",
    }
]

function Tabs() {
    const [activeTab, setactiveTab] = useState("Delivery");


    function handleClick(e) {
        setactiveTab(e.target.name);
    }

    const activestyle = {
        backgroundColor: "rgb(252, 238, 192)"
    }
    const notactive = {
        backgroundColor: "rgb(248, 248, 248)"
    }
    const titleactive = {
        color: "var(--zomato-red)"
    }
    const inActiveTitle ={
        color: "rgb(105, 105, 105)"
    }
    const borderbottom = {
        borderbottomColor : "10px solid red"
    }
    const inbottom ={
        borderbottomColor: "10px solid yellow"
    }
  
    return (
        <>
        <div>
        <div className="flex-row max-width tabs-conatiner">
            {tabContent.map(({id,activepic,inActivepic,title}) => {
                
                return <button style={title===activeTab ? borderbottom: inbottom} id={id} key={id} name={title} onClick={handleClick} className="flex-row tab-button main-button">
                    <button  style={title===activeTab? activestyle: notactive} className='img-div tab-button' name={title} onClick={handleClick}>
                <img  name={title} onClick={handleClick}  src={title===activeTab? activepic:inActivepic} alt="not found"></img>
                    </button>
                    <button style={title===activeTab ? titleactive:inActiveTitle} className='tab-button title' name={title} onClick={handleClick}>{title}</button>
                </button>
            })}
           
        </div>
        </div>
            <div className=" max-width">This is {activeTab}</div>
        </>
    )
}



export default Tabs