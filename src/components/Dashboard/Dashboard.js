import './Dashboard.css';

function Dashboard ({ advice, catPicture }) {
  return(
    <section className='dashboard'>
      <p>{advice}</p>
      <img className='cat-picture' src={catPicture}></img>
    </section>
  )
}

export default Dashboard; 