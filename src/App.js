import React from 'react'
import Nav from './components/nav'
import logo from './assets/images/logo.png'
import MainRoute from './components/main-route'

function App() {
  return (
    <div className="app">
      <Nav logo={logo} />

      <div className="content">
        <MainRoute/>
      </div>
    </div>
  )
}

export default App
