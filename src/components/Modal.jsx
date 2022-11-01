
import '../App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Modal(props) {
  const location = useLocation()
  const [ player, setPlayer ] = useState([])
  const url = `https://nbaapi-production.up.railway.app/players/Baker`
  const fetchPlayer = async () => {
    const response = await axios(url)
    setPlayer(response.data)
  }

  useEffect(() => { fetchPlayer() }, [location])
  console.log(player)

  return (
    <div className="Modal-Show">
      <h2>Player Info</h2>
      <ul>
        <li>Name: {player[0].first_name} {player[0].last_name}</li>
        <li>Team: {player[0].team.full_name}</li>
        <li>Position: {player[0].position}</li>
      </ul>
    </div>
  );
}

export default Modal;
