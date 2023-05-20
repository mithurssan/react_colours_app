import React, { useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import "./style.css"

const Colour = ({ colourList }) => {
    const navigate = useNavigate();
    const { colour } = useParams();
    const selectedColour = colourList.find(c => c.name === colour);

    useEffect(() => {
        if (!selectedColour) {
            navigate("/colours");
        }
    }, [])

    return (
        selectedColour && (
            <>
                <div className="colour-container">
                    <div className="colour-item" style={{ backgroundColor: selectedColour.hex }}>
                        <button onClick={() => navigate("/colours")}> Back to colours</button>
                        <h2>Selected colour: {selectedColour.name}</h2>
                    </div>
                </div>
            </>
        )
    )
}

export default Colour
