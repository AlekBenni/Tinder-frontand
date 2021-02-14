import React from 'react'
import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCard';

function App() {
  return (
    <div className="app">
        <Header />
        <TinderCards />
        <SwipeButtons />
    </div>
  );
}

export default App;
