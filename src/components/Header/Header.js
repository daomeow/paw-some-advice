import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <section className='header'>
      <h1>Paw-some<br/>Advice</h1>
      <section className='tab-container'>
        {location.pathname !== '/favorites' && 
          <NavLink to='/favorites' className='to-favorites'>
            <i className="far fa-heart"></i>View Favorites
          </NavLink>
        }
        {location.pathname === '/favorites' &&
          <NavLink to='/' className='go-home'>
            <i className="fas fa-paw"></i>Go Home
          </NavLink>
        }
      </section>
    </section>
  )
}

export default Header; 