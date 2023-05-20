import React from 'react'
import { useParams } from "react-router-dom"
import "./style.css"

const Colour = ({ colourList }) => {
    const { colour } = useParams();
    const selectedColour = colourList.find(c => c.name === colour);

    return (
        <div className="colour-container">
            <div className="colour-item" style={{ backgroundColor: selectedColour.hex }}>
                <h2>Selected colour: {selectedColour.name}</h2>
            </div>
        </div>
    )
}

export default Colour
