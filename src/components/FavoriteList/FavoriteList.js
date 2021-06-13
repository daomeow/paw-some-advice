import './FavoriteList.css';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import { render } from '@testing-library/react';

const FavoriteList = ({ favorites }) => {  
  const adviceCards = favorites.map(favorite => {
    return (
      <FavoriteCard
         advice={favorite.advice}
         catImage={favorite.cat}
         key={favorite.id}
      />
    )
  });

  return (
    <div className='favorites-container'>
      {adviceCards}
    </div>
  )
}

export default FavoriteList;