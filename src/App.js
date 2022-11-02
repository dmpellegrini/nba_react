import './App.css';
import { useState, useEffect } from 'react'
import Teams from './components/Teams.jsx'
import Players from './components/Players.jsx'
import Modal from './components/Modal.jsx'
import TeamModal from './components/TeamModal.jsx'


function App() {
  const [ lastName, setLastName ] = useState('')
  const [ playerName, setPlayerName ] = useState('')
  const [ abbreviation, setAbbreviation ] = useState('')
  const [ teamName, setTeamName ] = useState('')
  const handleName = (e) => {
    return setLastName(e.target.value)
  }
  const handleTeam = (e) => {
    return setAbbreviation(e.target.value)
  }
  const handlePlayerSubmit = (e) => {
    e.preventDefault()
    return setPlayerName(e.target.playerName.value)
  }
  const handleTeamSubmit = (e) => {
    e.preventDefault()
    return setTeamName(e.target.teamName.value)
  }

  useEffect(() => console.log(""),[playerName])

  return (
    <div className="App">
      <div className="Header">
        <h1>TONY'S NBA LEAGUE INFO!</h1><img id='nbaLogo' src='https://pngimg.com/uploads/nba/nba_PNG2.png'/>
      </div>
        
      <div className="FormContainer">
        <form onSubmit={handleTeamSubmit}>
          <input type="submit" value="Search Team"/>
          <input 
            type="text"
            value={abbreviation}
            onChange={handleTeam}
            id="teamName"
            placeholder="Team's Abbreviation"
          />
        </form>
        <form onSubmit={handlePlayerSubmit}>
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
        <TeamModal abbreviation={teamName}/>
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
