import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <App matchList={window.matchList} />,
    document.getElementById('app')
  )
})
