import './Header.css';

function Header () {
  return(
    <section className='header'>
      <h1>Paw-some<br/>Advice</h1>
      <section className='tab-container'>
        <a className='favorite-tab'>Favorite</a>
        <a className='game-tab'>Play Game</a>
      </section>
    </section>
  )
}

export default Header; 