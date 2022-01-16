import React from 'react'
import ReactDOM from 'react-dom'
import { Switch,  BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main'
import NewGame from './NewGame'
import JoinGame from './JoinGame'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}
