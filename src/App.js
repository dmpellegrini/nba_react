import './App.css';
import { useState } from 'react'
import Teams from './components/Teams.jsx'
import Players from './components/Players.jsx'


function App() {
  return (
    <div className="App">
      <header className='Header'>
        <h1>TONY'S NBA LEAGUE INFO!</h1>
      </header>
      <main className="Menu">
        <div className="Teams">
          <h2>Teams</h2>
          <ul>
            <Teams />
          </ul>
        </div>
        <div className="Players">
          <h2>Players</h2>
          <ul>
            <Players />
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
