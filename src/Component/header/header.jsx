import React from "react";
import './header.css'
import img from '../../image/img.jpeg'

const Header = () => {
    return(
       <div>
           <div className="container-header">
        <div className="header-element">
        <i class="material-icons" style={{marginTop:"24px"}}>dehaze</i>
            <p>keep</p>
            <img src={img} alt="Img" style={{width: "34px"}} />
        </div>
        <div className="header-element1">
            <input type="text" placeholder="Search.." />
        </div>
        <div className="header-element2">
            <div className="box1">
            <i class="material-icons" style={{marginTop:"24px"}}>settings_applications</i>
            </div>
            <div className="box2">
            <i class="material-icons" style={{marginTop:"24px"}}>refresh</i>
            </div>
            <div className="box3">
            <i class="material-icons" style={{marginTop:"24px"}}>list</i>
            </div>
        </div>
        <div className = "header-element3">
            <div className = "side-icon">
            <i class="material-icons" style={{marginTop:"24px"}}>format_align_justify</i>
            </div>
            <div className = "side-icon1">
            <i class="material-icons" style={{marginTop:"24px"}}>mail</i>
            </div>
        </div>
        </div>
       </div>
     
    )
}
export default Header