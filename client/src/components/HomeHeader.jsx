import '../styles.css';

const HomeHeader = () => {
    const team = [
        {
            id: 1,
            image: "https://i.imgur.com/o9eJw9Q.jpg",
            name: "Челси",
            countryImage: "https://imgur.com/mlfdDUy.jpg",
            country: "Англия",
        }
    ];

  return (
    <header className='container header'>
        {
            team.map((team, index) => (
                <div className='header__inner' key={index}>
                    <img className='header team__logo' src={team.image} alt=""/>
                    <div className='header header__text'>
                        <h2 className='header team__name'>{team.name}</h2>
                        <div className='header team__info'>
                            <img className='header country__logo' src={team.countryImage} alt="" />
                            <p className='header country__name'>{team.country}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </header>
  )
}

export default HomeHeader
