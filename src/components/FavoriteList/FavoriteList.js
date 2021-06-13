import './FavoriteList.css';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import { render } from '@testing-library/react';

const FavoriteList = ({ favorites }) => {  
  // const favoriteCards = favorites.map(fav => {
  //   return(
  //     <div>
  //       <p>{fav.advice}</p>
  //       <img className='cat-picture' src={fav.cat} alt='Cat picture' id={Date.now()}></img>
  //     </div>
  //   )
  // })
  // return(
  //   <section className='favorite-list'>
  //     {favoriteCards}
  //   </section>
  // )

  render() {
    const adviceCards = favorites.map(favorite => (
      <FavoriteCard
        advice={favorite.advice}
        catImage={favorite.cat}
      />
    ));
    return(
      <div className='favorites-container'>
        {adviceCards}
      </div>
    )
  }
}

export default FavoriteList;