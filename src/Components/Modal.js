import React from "react";
import pokeball from "../Images/pokeball.png";
import bg from "../Images/bg.jpg"


const Modal = ({onClick, id, name, image, type, height, weight, stats, statsName}) => {
    return (
        <div 
        style={{display:"flex", position:"fixed", top:"0", left:"0", zIndex:"10", 
        width:"100%", height:"100%", alignItems:"center", justifyContent:"space-evenly", 
        backgroundImage:`url(${bg})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>

        <div onClick={onClick}
        style={{
            position:"absolute", 
            top:"50px", 
            right:"50px",
            borderRadius:"50%", 
            padding: "5px 10px", 
            background:"black",
             color:"white", 
             fontWeight:"900", 
             cursor:"pointer", 
        }} >
        <div onClick={onClick}
        style={{
            position:"absolute", 
            top:"50px", 
            right:"50px", 
            borderRadius:"50%", 
            padding:"5px 10px", 
            background:"black", 
            color:"white", 
            fontWeight:"900", 
            cursor:"pointer",
        }}>X
        </div>
        <div>
            <img src={image} alt={name} style={{filter:"drop-shadow (2px 4px 12px black"}} />           
        </div>

        </div>
        </div>
    )
}


export default Modal