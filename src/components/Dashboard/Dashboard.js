import './Dashboard.css';

function Dashboard ({ advice, catPicture, getData}) {

  return (
    <section className='dashboard'>
      <p>{advice}</p>
      <img className='cat-picture' src={catPicture} alt='Cat picture'></img>
      <button className='advice-button' onClick={getData}>Receive Adive</button>
    </section>
  )

}

export default Dashboard; 
































// class extends Dashboard extends Component {
//   constructor (proprs) {
//     super(props)
//     this.state = {
//       active = false
//     }
//   }
//   render() {
//     <section className='dashboard'>
//       <p>{advice}</p>
//       <img className='cat-picture' src={catPicture} alt='Cat picture'></img>
//       <button className='advice-button' onClick={getData}>Receive Adive</button>
//     </section>
//   }
// }