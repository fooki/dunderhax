import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Editor from './Editor'
import JoinGame from './JoinGame'

export default function Main() {
  return (
    <>
      <h1 className="text-4xl text-green-600">Good luck!!!</h1>
      <JoinGame/>
      <Editor/>
    </>
  )
}
