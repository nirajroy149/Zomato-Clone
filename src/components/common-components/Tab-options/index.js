import React, { useState } from 'react'
import "./style.css";
import Delivery from '../../Pages/Delivery/Delivery';
import Dining from '../../Pages/Dining-out/Dining'
import Night from '../../Pages/Night-life/Night';

const tabContent = [
    {
        id: 1,
        acitveColor: "rgb(252, 238, 192)",
        activepic: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
        inActivepic: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
        title: "Delivery",
    },
    {
        id: 2,
        acitveColor: "rgb(229, 243, 243)",
        activepic: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
        inActivepic: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
        title: "Dining Out",
    },
    {
        id: 3,
        acitveColor: "rgb(237, 244, 255)",
        activepic: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
        inActivepic: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
        title: "Nightlife",
    }
]

function Tabs() {
    const [activeTab, setActiveTab] = useState("Delivery");

    function PageSelection(Tab) {
        switch (Tab) {
            case "Delivery":
                document.title = 'Delivery Restaurants in Ruby Hospitals';
                return <Delivery />

            case "Dining Out":
                document.title = 'Dine-Out Restaurants in Ruby Hospitals';
                return <Dining />

            case "Nightlife":
                document.title = 'Nightlife Restaurants in Ruby Hospitals';
                return <Night />


            default:
                return <Delivery />

        }
    }
    return (

        <>
            <div className={`whole-tabs-container ${activeTab !== "Delivery" && "po-sticky"}`}>
                <div className='tab-inner-container max-width flex-row'>
                    {tabContent.map((tab) => {
                        return (
                            <div id={tab.id} key={tab.id} className={`cur-po tab-options ${tab.title === activeTab && "borderbottom"}`}
                                onClick={() => {
                                    setActiveTab(tab.title)
                                }}
                            >
                                <div className="img-tab-container flex-row">
                                    <div
                                        className='img-container flex-row'
                                        style={{ backgroundColor: `${tab.title === activeTab ? tab.acitveColor : ""}` }}
                                    >
                                        <img alt='not found' className='tab-img '

                                            src={activeTab === tab.title ? tab.activepic : tab.inActivepic}></img>
                                    </div>
                                    <div className='tab-title active-color'>{tab.title}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* important */}

            {PageSelection(activeTab)}
        </>

    )
}



export default Tabs