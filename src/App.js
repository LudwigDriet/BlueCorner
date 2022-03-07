
import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import SearchPage from './SearchPage'
import { Routes, Route } from "react-router-dom";


function App() {
  return (

    <div className="app">
      <Routes>

        <Route path="/" element={
          <div>
            <Header />
            <Home />
          </div>
          } />

        <Route path="/search" element={
          <div>
            <Header />
            <SearchPage />
          </div>
          } />
          
      </Routes>
    </div>
  );
}

export default App;
