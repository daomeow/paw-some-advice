import './FavoriteList.css';

function FavoriteList({ favorites }) {
  console.log(favorites)
  
  const favoriteCards = favorites.map(fav => {
    return(
      <div>
        <p>{fav.advice}</p>
        <img className='cat-picture' src={fav.cat} alt='Cat picture'></img>
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