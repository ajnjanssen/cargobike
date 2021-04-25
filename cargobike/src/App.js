import './App.css';
import Header from "./Header";
import Body from './Body';
import React from 'react';
import { useEffect } from 'react';
import { auth } from './components/firebase/Firebase';
import { useState } from 'react';


function App() {

  return (
    <div className="App">

      <Header />
      
      <Body />
    </div>
  );
}

export default App;
