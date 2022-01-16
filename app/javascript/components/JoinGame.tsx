import * as React from 'react'
import * as ReactDOM from 'react-dom'

export default function JoinGame() {
  return (
    <div>
      <form action="/" method="post">
        <div>
          <label htmlFor="join-nickname">Nickname</label>
          <input id="join-nickname" type="text" name="nickname" placeholder="Kalle"/>
        </div>
        <div>
          <input type="submit" value="Go!" />
        </div>
      </form>
    </div>
  )
}
