import { FaChartLine, FaBell } from "react-icons/fa";
import { MdSportsSoccer } from "react-icons/md";

const MatchCard = ({ match, isLive = false }) => (
  <div className="match__card text-dark d-flex justify-content-between align-items-center rounded-3 p-2 mb-2">
    <div className="d-flex align-items-center">
      <img src={match.tournament.logo} alt="logo" style={{ width: 40 }} />
      <div className="mx-5 text-center">
        <div className="fw-bold">{isLive ? match.time : "FT"}</div>
        {!isLive && <small>{match.date}</small>}
      </div>
      <img
        src={match.team1.logo}
        alt="team1"
        className="mx-2"
        style={{ width: 30 }}
      />
      <span className="fw-bold">{match.team1.name}</span>
      <span className="mx-5 text-info fw-bold">{match.score}</span>
      <span className="fw-bold">{match.team2.name}</span>
      <img
        src={match.team2.logo}
        alt="team2"
        className="mx-2"
        style={{ width: 30 }}
      />
    </div>
    <div className="d-flex gap-2">
      <button className="btn btn-sm btn-outline-info">
        <FaChartLine />
      </button>
      <button className="btn btn-sm btn-outline-info">
        <FaBell />
      </button>
    </div>
  </div>
);

const MatchList = ({ data }) => (
  <div className="container mt-4 text-white">
    <h5 className="text-info">Текущий матч</h5>
    <MatchCard match={data.current} isLive={true} />

    <h5 className="text-info mt-4">Завершенные матчи</h5>
    {data.finished.map((match, i) => (
      <MatchCard key={i} match={match} />
    ))}

    <div className="mt-2">
      <a href="#" className="text-info text-decoration-none">Показать все...</a>
    </div>
  </div>
);

export default MatchList;
