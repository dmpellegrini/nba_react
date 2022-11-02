import './App.css';
import { useState, useEffect } from 'react'
import Teams from './components/Teams.jsx'
import Players from './components/Players.jsx'
import Modal from './components/Modal.jsx'


function App() {
  const [ lastName, setLastName ] = useState('')
  const [ playerName, setPlayerName ] = useState('')
  const handleName = (e) => {
    return setLastName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    return setPlayerName(e.target.playerName.value)
  }

  useEffect(() => console.log(""),[playerName])

  return (
    <div className="App">
      <div className="Header">
        <h1>TONY'S NBA LEAGUE INFO!</h1><img id='nbaLogo' src='https://pngimg.com/uploads/nba/nba_PNG2.png'/>
      </div>
        
      <div className="FormContainer">
        <form onSubmit={handleSubmit}>
          <input type="submit" value="Search Player"/>
          <input 
            type="text"
            value={lastName}
            onChange={handleName}
            id="playerName"
            placeholder="Player's Last Name"
          />
        </form>
      </div>
      <div className="Menu">
        <div className="Teams">
          <h2>Teams</h2>
          <ul>
            <Teams />
          </ul>
        </div>
        <Modal lastName={playerName}/>
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
