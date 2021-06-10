import './Header.css';

function Header () {
  return(
    <section className='header'>
      <h1>Paw-some<br/>Advice</h1>
      <section className='tab-container'>
        <a className='favorite-tab'><i className="far fa-heart"></i>Favorite</a>
        <a className='game-tab'><i className="fas fa-caret-right"></i>Play Game</a>
      </section>
    </section>
  )
}

export default Header; 