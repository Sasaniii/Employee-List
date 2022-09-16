import React, { useEffect } from 'react'
import FetchIndex from './components/FetchIndex';
import './App.css';
import { Router, Route, Routes } from 'react-router'

function App(){
 return(
  <div className='App'>
      <FetchIndex />  

    {/* <Router>
      <Routes>
      <Route  path="/employee/:Id" element={<FetchIndex />} />
     
      </Routes>
    </Router> */}
  </div>
 )
}

export default App