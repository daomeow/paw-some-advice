import './FavoriteCard.css';
import PropTypes from 'prop-types';

const FavoriteCard = ({ advice, catImage}) => {
  return (
    <div className='favorite-card'>
      <p className='favorite-advice'>{advice}</p>
      <img className='cat-picture' src={catImage} alt='Cat picture'></img>
    </div>
  )
}

FavoriteCard.propTypes = {
  advice: PropTypes.string,
  catImage: PropTypes.string
}

export default FavoriteCard;
