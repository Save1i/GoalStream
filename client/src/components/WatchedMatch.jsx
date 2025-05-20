import { FaBell, FaChartLine } from "react-icons/fa";
import "../WatchedMatch.css";

const WatchedMatch = () => {
  const matches = [
    {
      id: 1,
      time: "11:12",
      homeTeam: {
        name: "Барселона",
        logo: "/images/barcelona.png",
        score: 3,
      },
      awayTeam: {
        name: "Боруссия Дортмунд",
        logo: "/images/dortmund.png",
        score: 2,
      },
      tournamentLogo: "/images/ucl.png",
    },
    // можно добавить другие матчи сюда
  ];

  return (
    <div className="container watched-container p-3">
      <h3 className="mb-3 text-black fw-bold">Просмотренные матчи</h3>

      {matches.map((match) => (
        <div
          className="match-card d-flex align-items-center justify-content-center px-3 py-2 rounded mb-2"
          key={match.id}
        >
          <img
            src="/le.png"
            alt="tournament"
            className="tournament-logo me-2"
          />

          <div className="score-box text-center me-3">
            <div className="text-primary fw-bold">FT</div>
            <small className="text-black">{match.time}</small>
          </div>

          <img src="/bar.png" alt="home" className="team-logo me-2" />
          <span className="team-name text-black me-2">{match.homeTeam.name}</span>

          <span className="score text-info fw-bold mx-1">
            {match.homeTeam.score}:{match.awayTeam.score}
          </span>

          <span className="team-name text-black me-2">{match.awayTeam.name}</span>
          <img src="bo.png" alt="away" className="team-logo me-3" />

          <FaChartLine className="icon me-2" color="#00C8FF" />
          <FaBell className="icon" color="#00C8FF" />
        </div>
      ))}
    </div>
  );
};

export default WatchedMatch;
