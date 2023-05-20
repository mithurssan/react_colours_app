import React, { useState } from 'react'

const New = ({ colourList, setColourList }) => {
    const [name, setName] = useState("")
    const [hex, setHex] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setColourList([...colourList, { name: name, hex: hex }])
    }

    return (
        <>
            <form>
                <label htmlFor="name">Colour name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="hex">Hex Code:</label>
                <input type="text" id="hex" value={hex} onChange={(e) => setHex(e.target.value)} />
                <button
                    type="submit"
                    onClick={handleSubmit}
                >Add Colour!</button>
            </form>
        </>
    )
}

export default New
