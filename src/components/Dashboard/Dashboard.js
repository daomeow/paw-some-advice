import './Dashboard.css';

function Dashboard ({ advice, catPicture }) {
  return(
    <section className='dashboard'>
      <p>{advice}</p>
      <img className='cat-picture' src={catPicture} alt='Cat picture'></img>
      <button className='advice-button'>Receive Adive</button>
    </section>
  )
}

export default Dashboard; 