import { useEffect, useState } from "react";

const Favorits = ({userId}) => {
    useEffect(() => {
        elasticSearch()
    }, [])

    const [players, setPlayers] = useState([])

    const elasticSearch = async () => {
    try {

      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/selectTeam/${userId}`
      );
      const data = await res.json();
      if (Array.isArray(data)) {
        setPlayers(data);
      } else {
        setPlayers([]);
      }

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <p>Избранное</p>
      {players.map((player) => (
        <div>
            <img src={player.img} alt="player" srcset="" />
            <div>
                <p>{player.number}</p>
                <p>{player.name}</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Favorits
