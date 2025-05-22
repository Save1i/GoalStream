import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaCheckCircle, FaTimesCircle, FaMinusCircle } from "react-icons/fa";
import '../styles.css';

const HomeTable = () => {
    const league = [
        {
            id: 1,
            name: "АПЛ",
            countryImage: "/Flag_of_England.png",
            leagueImage: "/lion_legue.png"
        }
    ];

    const standingsData = [
  {
    id: 1,
    club: "Chelsea F.C",
    logo: "chelsea-logo.png",
    w: 14,
    d: 3,
    l: 1,
    points: 35,
    lastMatches: ["win", "win", "draw", "lose"]
  },
  {
    id: 2,
    club: "Manchester City",
    logo: "Manchester_City_FC-logo.png",
    w: 13,
    d: 3,
    l: 2,
    points: 32,
    lastMatches: ["win", "win", "win", "win", "lose"]
  },
  {
    id: 3,
    club: "Liverpool",
    logo: "liverpool_f.c.-logo.png",
    w: 13,
    d: 3,
    l: 3,
    points: 30,
    lastMatches: ["win", "lose", "draw", "win"]
  },
  {
    id: 4,
    club: "Manchester United",
    logo: "Manchester_United_FC-logo.png",
    w: 12,
    d: 4,
    l: 3,
    points: 28,
    lastMatches: ["lose", "win", "win", "win", "win"]
  },
  {
    id: 5,
    club: "West Ham United",
    logo: "West_Ham_United_FC-logo.png",
    w: 11,
    d: 4,
    l: 4,
    points: 27,
    lastMatches: ["win", "win", "win", "win", "lose"]
  },
  {
    id: 6,
    club: "Arsenal FC",
    logo: "arsenal-logo.png",
    w: 11,
    d: 4,
    l: 6,
    points: 25,
    lastMatches: ["lose", "win", "draw", "lose", "win"]
  }
];



    const getResultIcon = (result) => {
  switch (result) {
    case "win":
      return <FaCheckCircle color="limegreen" />;
    case "lose":
      return <FaTimesCircle color="red" />;
    case "draw":
      return <FaMinusCircle color="gray" />;
    default:
      return null;
  }
};
  return (
    <div className="container home__table">
      <h2 className="table__title">🏆 Таблица</h2>
          {
        league.map((el, index) => (
    <Navbar variant="white" bg="white" expand="lg">

      <Container fluid key={index}>
        <Navbar.Brand href="#home">
            <img className='table__img' src={el.countryImage} alt="" />
            <img src={el.leagueImage} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-white-example" />
        <Navbar.Collapse id="navbar-white-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-white-example"
              title={el.name}
              menuVariant="white"
            >
              <NavDropdown.Item href="#action/3.2">
                другая лига
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                еще одна лига
              </NavDropdown.Item>            
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
            <p>Смотреть</p>
      </Container>
           
    </Navbar>
                 ))
        }
         <div className="container p-3">
      <table className="table text-white">
        <thead>
          <tr>
            <th>Club</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>Points</th>
            <th>Last Match</th>
          </tr>
        </thead>
        <tbody>
          {standingsData.map((team, index) => (
            <tr key={team.id} className="standings-row">
              <td className="d-flex align-items-center">
                <span className="me-2">{index + 1}</span>
                <img src={team.logo} alt="club" className="club-logo me-2" />
                {team.club}
              </td>
              <td>{team.w}</td>
              <td>{team.d}</td>
              <td>{team.l}</td>
              <td>{team.points}</td>
              <td className="d-flex gap-2">
                {team.lastMatches.map((res, idx) => (
                  <span key={idx}>{getResultIcon(res)}</span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="legend d-flex gap-4 mt-3">
        <div className="d-flex align-items-center gap-2">
          <span className="dot purple"></span> Лига Чемпионов
        </div>
        <div className="d-flex align-items-center gap-2">
          <span className="dot white"></span> Лига Европы
        </div>
      </div>
    </div>
    </div>
  )
}

export default HomeTable
