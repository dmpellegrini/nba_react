import '../App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'


function Players(props) {
  const location = useLocation()
  const [ players, setPlayers ] = useState([])
  const url = `https://nbaapi-production.up.railway.app/players`
  const fetchPlayers = async () => {
    const response = await axios(url)
    setPlayers(response.data)
  }

  useEffect(() => { fetchPlayers() },[location]) 
  
  return (
      <>
      {
        players.map((player, index) => {
          if (player.first_name !== undefined) {
            return (
              <li key={index}>{player.first_name} {player.last_name}</li>
            )
          }
        })
      }
      </>
  );
}

export default Players;
