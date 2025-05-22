const TopPlayerCard = ({ player }) => {
  return (
    <div className="container text-white mt-4 mb-4">
      <h5 className="text-info fw-bold">Лучшие игроки</h5>
      <div className="bg-dark d-flex align-items-center rounded-3">
        <img
          src={player.image}
          alt={player.name}
          className="me-3 rounded-3"
          style={{ width: 150 }}
        />
        <div className="flex-grow-1">
          <h1 className="mb-0">{player.number}</h1>
          <h4>{player.name}</h4>
        </div>
        <div className="text-end p-3">
          <p className="mb-1">{player.stats.matches} матчей</p>
          <p className="mb-1">{player.stats.goals} голов</p>
          <p className="mb-0">{player.stats.assists} ассиста</p>
        </div>
      </div>
    </div>
  );
};

export default TopPlayerCard
