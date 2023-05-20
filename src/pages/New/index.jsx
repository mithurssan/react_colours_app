import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./style.css"

const New = ({ colourList, setColourList }) => {
    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [hex, setHex] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setColourList([{ name: name, hex: hex }, ...colourList]);
        alert("Colour Created!");
        setName("");
        setHex("");
        navigate("/colours")
    }

    return (
        <>
            <div className="form-container">
                <form className="colour-form">
                    <label htmlFor="name">Colour name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="hex">Hex or Colour name:</label>
                    <input type="text" id="hex" value={hex} onChange={(e) => setHex(e.target.value)} />
                    <button
                        type="submit"
                        onClick={handleSubmit}
                    >Add Colour!</button>
                </form>
            </div>
        </>
    )
}

export default New
