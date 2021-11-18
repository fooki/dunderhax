import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom";


export default function MainMenu() {
  return (
    <>
      <h1>This is main menu bro</h1>
      <Link to="/games/asdf">NEW GAME</Link>
    </>
  )
}
