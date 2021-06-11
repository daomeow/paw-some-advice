import './FavoriteList.css';

function FavoriteList({ favorites }) {
  console.log(favorites)
  
  const favoriteCards = favorites.map(fav => {
    return(
      <div>
        <p>{fav.advice}</p>
        <img className='cat-picture' src={fav.cat} alt='Cat picture' id={Date.now()}></img>
      </div>
    )
  })
  return(
    <section className='favorite-list'>
      {favoriteCards}
    </section>
  )
}

export default FavoriteList;