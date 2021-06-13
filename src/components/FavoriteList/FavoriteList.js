import './FavoriteList.css';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import PropTypes from 'prop-types';

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

FavoriteList.propTypes = {
  favorites: PropTypes.array
};

export default FavoriteList;