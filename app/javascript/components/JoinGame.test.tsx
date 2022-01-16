import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import JoinGame from './JoinGame'

describe("JoinGame", () => {
  it("allows the user to register a name", () => {
    render(<JoinGame/>)

    userEvent.type(
      screen.getByRole('textbox', { name: "Nickname" }),
      'Dunderdödaren',
    );

    expect(screen.getByRole('button', { name: "Go!" })).toBeInTheDocument();
  })
})
