import './Dashboard.css';
import defaultCat from '../../assets/default-cat.png';
import PropTypes from 'prop-types';

const Dashboard = ({ advice, catPicture, getData, addFavorite}) => {
  console.log(typeof(catPicture))
  return (
    <section className='dashboard'>
      <div className='content'>
        <p className='advice'>{advice}</p>
        {!catPicture ?
            <img className='default-cat' src={defaultCat} alt='Default cat photo'></img>
          :<div>
            <img className='cat-picture' src={catPicture} alt='Cat picture'></img>
          </div>
        }
        <section className='button-container'>
          <button className='advice-button' onClick={getData}>Receive Advice</button>
          <button className='add-favorite' onClick={addFavorite}>Add to Favorite</button>
        </section>
      </div>
    </section>
  )
}

Dashboard.propTypes = {
  advice: PropTypes.string,
  catPicture: PropTypes.string,
  getData: PropTypes.func,
  addFavorite: PropTypes.func
}

export default Dashboard; 
































