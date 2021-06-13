import './Dashboard.css';
import defaultCat from '../../assets/default-cat.png';

function Dashboard ({ advice, catPicture, getData, addFavorite}) {

  return (
    <section className='dashboard'>
      {!catPicture ?
        <img className='default-cat' src={defaultCat} alt='Default cat photo'></img>

        :<div>
          <p>{advice}</p>
          <img className='cat-picture' src={catPicture} alt='Cat picture'></img>
        </div>
      }
      <button className='advice-button' onClick={getData}>Receive Advice</button>
      <button className='add-favorite' onClick={addFavorite}>Add to Favorite</button>
    </section>
  )

}

export default Dashboard; 
































