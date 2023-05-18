import React from 'react'
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages"
import { NavBar } from "./layout"
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Pages.Home />} />
          <Route path="/colours" element={<Pages.Colours />} />
          <Route path="/new" element={<Pages.New />} />
          <Route path="*" element={<Pages.NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
