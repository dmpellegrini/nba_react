
import '../App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Modal(props) {
  console.log(props.lastName)
  const location = useLocation()
  const [ player, setPlayer ] = useState({})
  const url = `https://nbaapi-production.up.railway.app/players/${props.lastName}`
  const fetchPlayer = async () => {
    const response = await axios(url)
    const playerData = response.data[0]
    const { first_name, last_name, team, position } = playerData
    const teamName = team.full_name
    setPlayer({
      first_name,
      last_name,
      teamName,
      position,
    })
  }

  useEffect(() => { fetchPlayer(); console.log('yo')},[props.lastName])

  return (
    <div className="Modal-Show">
      <h2>Player Info</h2>
      <ul>
        <li>Name: {player.first_name} {player.last_name}</li>
        <li>Team: {player.teamName}</li>
        <li>Position: {player.position}</li>
      </ul>
    </div>
  );
}

export default Modal;
