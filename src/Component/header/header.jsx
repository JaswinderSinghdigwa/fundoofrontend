import React from "react";
import './header.css'
import img from '../../image/img.jpeg'

const Header = () => {
    return(
       <div>
           <div className="container-header">
        <div className="header-element">
        <i class="material-icons" style={{marginTop:"24px",fontSize:"30px"}}>dehaze</i>
            <p>keep</p>
            <img src={img} alt="Img" style={{width: "48px",height: "61px",marginTop: "10px"}} />
        </div>
        <div className="header-element1">
            <input type="text" placeholder="Search.." />
        </div>
        <div className="header-element2">
            <div className="box1">
            <i class="material-icons" style={{fontSize:"30px"}}>settings_applications</i>
            </div>
            <div className="box2">
            <i class="material-icons" style={{fontSize:"30px"}}>refresh</i>
            </div>
            <div className="box3">
            <i class="material-icons" style={{fontSize:"30px"}}>list</i>
            </div>
        </div>
        <div className = "header-element3">
            <div className = "side-icon">
            <i class="material-icons" style={{fontSize:"30px"}}>format_align_justify</i>
            </div>
            <div className = "side-icon1">
            <i class="material-icons" style={{fontSize:"30px"}}>mail</i>
            </div>
        </div>
        </div>
       </div>
     
    )
}
export default Header