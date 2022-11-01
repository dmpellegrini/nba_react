import './App.css';
import { useState, useEffect } from 'react'
import Teams from './components/Teams.jsx'
import Players from './components/Players.jsx'
import Modal from './components/Modal.jsx'


function App() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')

  }

  const [ lastName, setLastName ] = useState('')
  return (
    <div className="App">
      <div className="Header">
        <h1>TONY'S NBA LEAGUE INFO!</h1>
      </div>
      <div className="FormContainer">
        <form>
          <input type="submit" value="Search Player"/>
          <input 
            type="text"
            name="playerName"
            id="playerName"
            placeholder="Player's Last Name"
          />
        </form>
      </div>
      <Modal lastName="Baker"/>
      <div className="Menu">
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
      </div>
    </div>
  );
}

export default App;
