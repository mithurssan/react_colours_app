import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./style.css"

const Colours = ({ colourList }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="colours-container">
        <h1>Colour List</h1>
        <div className="colour" >
          {colourList.map(colour => (<li
            onClick={() => navigate(`/colours/${colour.name}`)}
            key={colour.name}
            style={{ backgroundColor: `${colour.hex}` }
            }
          >{colour.name}</li>))}
        </div>
      </div>
    </>
  )
}

export default Colours
