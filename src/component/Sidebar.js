import React from 'react'
import './home.css'
import profile from '../img/landing13.png'
const Sidebar = () => {
  return (
    <>
          <div className="leftContainer">
            <div className="userProfile">
                <img src={profile} alt="dashboard header" />
                <p>Learning Tech</p>
            </div>
            <div className="dbViewList">
                <p title="Report One"><span>01</span>Check Report</p>
                <p title="Report Two" className="active"><span>02</span>Check Report</p>
                <p title="Report Three"><span>03</span>Check Report</p>
                <p title="Report Four"><span>04</span>Check Report</p>
                <p title="Report Five"><span>05</span>Check Report</p>
                <p title="Report Six"><span>06</span>Check Report</p>
            </div>
        </div>
    
    </>
  )
}

export default Sidebar
