// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Create_Ad from './components/CreateAd';


function App() {
  return (
    <>
    <NavBar />
    <Routes>
    <Route path='/' element={<Dashboard/>} />
    <Route path='/createAd' element={<Create_Ad/>}/>
  </Routes>
    </>
  );
}

export default App;
