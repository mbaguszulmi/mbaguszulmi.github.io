import React from 'react'
import logo from './assets/images/logo.png'
import Footer from './components/footer'
import MainRoute from './components/main-route'
import Nav from './components/nav'

function App() {
  return (
    <div className="app">
      <Nav logo={logo} />

      <div className="content">
        <MainRoute />
      </div>

      <Footer />
    </div>
  )
}

export default App
