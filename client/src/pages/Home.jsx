import HomeHeader from "../components/HomeHeader"
import HomeTable from "../components/homeTable"
import MatchList from "../components/MatchCard"
import TopPlayerCard from "../components/TopPlayerCard";

const Home = () => {
  const matches = {
  current: {
    time: "59'",
    team1: { name: "Челси", logo: "chelsea-logo.png" },
    team2: { name: "Астана", logo: "FC_Astana_Logo.svg.png" },
    score: "3:0",
    tournament: { name: "UECL", logo: "uefa-europa-conference-league.png" }
  },
  finished: [
    {
      date: "09.12",
      score: "2:0",
      team1: { name: "Челси", logo: "chelsea-logo.png" },
      team2: { name: "Фулхэм", logo: "fulham-logo.png" },
      tournament: { logo: "lion_legue.png" }
    },
    {
      date: "04.12",
      score: "3:1",
      team1: { name: "Челси", logo: "chelsea-logo.png" },
      team2: { name: "Брайтон", logo: "FC_Brighton_&_Hove_Albion-logo.png" },
      tournament: { logo: "lion_legue.png" }
    },
  ]
};

const player = {
  name: "Коул Палмер",
  number: 20,
  image: "https://imgur.com/H1cJ06r.jpg",
  stats: {
    matches: 36,
    goals: 15,
    assists: 8,
  },
};


  return (
    <div>
        <main>
          <HomeHeader/>
          <HomeTable/>
          <MatchList data={matches}/>
          <TopPlayerCard player={player}/>
        </main>
    </div>
  )
}

export default Home
