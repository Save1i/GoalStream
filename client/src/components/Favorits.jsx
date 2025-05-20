import { useEffect, useState } from "react";

const Favorits = ({userId}) => {
    useEffect(() => {
        elasticSearch()
    }, [])

    const [teams, setTeams] = useState([])

    const elasticSearch = async () => {
    try {

      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/selectTeam/${userId}`
      );
      const data = await res.json();
      if (Array.isArray(data)) {
        setTeams(data);
      } else {
        setTeams([]);
      }

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <p>Избранное</p>
      {teams.map((team, index) => (
        <div key={index}>
            <img src={team.img} alt="team" />
            <div>
                <p>{team.name}</p>
                <div>
                  <img src={team.country_img} alt="" />
                  <p>{team.team_country}</p>
                </div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Favorits
