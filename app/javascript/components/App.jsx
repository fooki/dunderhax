import React from 'react'
import ReactDOM from 'react-dom'
import { Switch,  BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './MainMenu'
import NewGame from './NewGame'
import JoinGame from './JoinGame'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="games">
          <Route path="new" element={<NewGame />} />
          <Route path=":id" element={<JoinGame />} />
        </Route>
        <Route path="/*" element={<MainMenu />} />
      </Routes>
    </BrowserRouter>
  )
}
