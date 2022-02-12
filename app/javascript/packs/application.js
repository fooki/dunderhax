// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import "./application.css"

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import { subscribe } from '../channels/game_channel';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App/>,
    document.body.appendChild(document.createElement('div')),
  );
})

const connected = subscribe();
//window.GameChannel
