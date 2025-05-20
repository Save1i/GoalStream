import { useEffect, useState } from "react";
import '../styles.css';

const Favorits = ({ userId }) => {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getFavTeam();
    getFavPlayer();
  }, []);

  const getFavTeam = async () => {
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
    } catch (error) {
      console.log(error);
    }
  };

  const getFavPlayer = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/player/${userId}`
      )
      const data = await res.json()
      if(Array.isArray(data)) {
        setPlayers(data)
      } else {
        setPlayers({})
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container py-4">
      <h3 className="text-start">Избранное</h3>
      <div className="row team">
        {teams.map((team, index) => (
          <div className="row-md-4 mb-4 mt-4" key={index}>
  <div className="d-flex justify-content-start h-100 shadow-sm card-hover">
    <img
      src={team.img}
      alt="team"
      className="card-img-top img-fluid"
      style={{
        height: "90px",
        objectFit: "contain",
        width: "fit-content",
        margin: "0 20px 0 0",
        padding: "10px"
      }}
    />
    <div className="d-flex flex-column justify-content-center card-body">
      <h5 className="card-title">{team.name}</h5>
      <div className="d-flex align-items-center mt-2">
        {team.country_img && (
          <img
            src={team.country_img}
            alt=""
            className="me-2"
            style={{ width: "28px", height: "28px" }}
          />
        )}
        <p className="mb-0">{team.team_country}</p>
      </div>
    </div>
  </div>
</div>

        ))}
        {teams.length === 0 && (
          <p className="text-center">Нет избранных команд</p>
        )}
      </div>
      <div className="row player">
        {players.map((player, index) => (
          <div className="row-md-4 mb-4 mt-4" key={index}>
            <div className="d-flex justify-content-start h-100 shadow-sm card-hover">

              <img
                src={player.img}
                alt="team"
                className="card-img-top img-fluid"
                style={{ height: "200px", objectFit: "contain", width: "fit-content", margin: "0 20px 0 0"}}
              />
              <div className="d-flex flex-column justify-content-end mb-3 card-body">
                <h5 className="card-title-p">{player.number}</h5>
                <p className="mb-0 card-name">{player.name}</p>
                </div>
              </div>
            </div>
        ))}
        {players.length === 0 && (
          <p className="text-center">Нет избранных играков</p>
        )}
      </div>
    </div>
  );
};

export default Favorits;
