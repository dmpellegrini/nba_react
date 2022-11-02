import '../App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'


function Teams(props) {
  const location = useLocation()
  const [ teams, setTeams ] = useState([])
  const url = `https://nbaapi-production.up.railway.app/teams`
  const fetchTeams = async function () {
    const response = await axios(url)
    setTeams(response.data)
  }

  useEffect(() => { fetchTeams() },[location]) 
  
  return (
    <>
      {
        teams.map((team, index) => {
          if (team.full_name !== undefined) {
            return (
              <li key={index}>{team.full_name}, {team.abbreviation}</li>
            )
          }
        })
      }
    </>
  );
}

export default Teams;

