import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages"
import { NavBar } from "./layout"
import "./App.css"

const App = () => {
  const [colourList, setColourList] = useState([
    { name: "Red", hex: "#FF0000" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Green", hex: "#00FF00" }
  ])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Pages.Home />} />
          <Route path="/colours" element={<Pages.Colours colourList={colourList} />} />
          <Route path="/new" element={<Pages.New colourList={colourList} setColourList={setColourList} />} />
          <Route path="/colours/:colour" element={<Pages.Colour colourList={colourList} />} />
          <Route path="*" element={<Pages.NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
