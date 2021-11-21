import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import App from './App'

describe("App", () => {

  it("just works", () => {
    render(<App/>)

    expect(screen.getByText("Good luck!!!")).toBeInTheDocument()
  })
})
