import React from 'react'
import "./style.css"

const Home = () => {
  return (
    <h1 className="home-title">Welcome to the Colours App, click <a href="/new">here</a> to add a new colour, otherwise click <a href="/colours">here</a> to view the list of colours!</h1>
  )
}

export default Home
