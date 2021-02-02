import React from 'react';
import { FcHome, FcSearch } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeBtn, setActiveBtn] = React.useState('Home');
  return (
    <section className='nav-actions'>
      <span>
        <Link to='/'>
          <button
            className={activeBtn === 'Home' ? 'btn active' : 'btn'}
            onClick={() => setActiveBtn('Home')}
          >
            <FcHome size={20} />
            <span>Home</span>
          </button>
        </Link>
      </span>
      <span>
        <Link to='/search'>
          <button
            className={activeBtn === 'Search' ? 'btn active' : 'btn'}
            onClick={() => setActiveBtn('Search')}
          >
            <FcSearch size={20} />
            <span>Search</span>
          </button>
        </Link>
      </span>
    </section>
  );
};

export default Navbar;
