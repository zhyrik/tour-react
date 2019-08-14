import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Navbar from './components/Navbar'
import TourList from './components/TourLIst'

/**
 * main component
 * @function
 * @returns {JSX.Element}
 */
function App() {
  return (
    <div className="App" data-test="app">
      <Navbar />
      <TourList />
    </div>
  )
}

export default App
