import React from "react"
import "./PokemonCard.css"
import pokeball from "../Images/pokeball.png"

//, type, weight, height, stats, statsName//

function PokemonCard({id, name, image }) {
    return (
        <div className="container">
            <div className="show">
                <div className="stat-container-title">
                    <img src={image} alt={name} className="image-title"/>
                    <p style={{width: "180px", color: "black"}}> No. {id}</p>
                    <p> {name} </p>
                    <img src={pokeball} alt="pokeball" className="pokeball-title"/>
                </div>
                <img src ={image} alt={name}/>
                <div style = {{display:"flex", width:"100%"}}>
                    <div style={{background:"#dbdbd9", textAlign:"center" }} className="stats-left">
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PokemonCard