import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { NavBar } from './layout'
import * as Pages from './pages'

const App = () => {
  return (
    <div className="App">
    <Routes>

      <Route path="/" element={<NavBar />}>
        <Route index element={<Pages.Home />} />

         <Route path="/colours">
          <Route index element={<Pages.Colour />} />
          <Route path="new" element={<Pages.Form />} />
          <Route path="*" element={<Pages.Home />} />
          <Route path=":colour" element={<Pages.ColourItem />} />
        </Route> 

        <Route path="*" element={<Pages.Home />} />
      </Route>
      
    </Routes>
  </div>
  )
}

export default App
