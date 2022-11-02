
import '../App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function TeamModal(props) {
  console.log(props.abbreviation)
  const location = useLocation()
  const [ team, setTeam ] = useState({})
  const url = `https://nbaapi-production.up.railway.app/teams/${props.abbreviation}`
  const fetchTeam = async () => {
    const response = await axios(url)
    const teamData = response.data[0]
    const { city, conference, division, full_name } = teamData
    setTeam({
      city,
      conference,
      division,
      full_name,
    })
  }

  useEffect(() => { fetchTeam(); console.log('yo')},[props.abbreviation])

  return (
    <div className="Modal-Show">
      <h2>Team Info</h2>
      <ul>
        <li>Name: {team.full_name}</li>
        <li>City: {team.city}</li>
        <li>Conference: {team.conference}</li>
        <li>Division: {team.division}</li>
      </ul>
    </div>
  );
}

export default TeamModal;
