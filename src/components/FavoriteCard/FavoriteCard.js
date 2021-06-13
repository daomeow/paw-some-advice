import './FavoriteCard.css';

const FavoriteCard = ({ advice, catImage}) => {
  return (
    <div className='favorite-card'>
      <p>{advice}</p>
      <img className='cat-picture' src={catImage} alt='Cat picture'></img>
    </div>
  )
}

export default FavoriteCard;
