import React from 'react';
import { FcHome, FcSearch } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Navbar = ({ firstName, lastName }) => {
  const [activeBtn, setActiveBtn] = React.useState('Home');

  React.useEffect(() => {
    document.title = `${firstName} ${lastName} | ${activeBtn}`;
  }, [activeBtn, firstName, lastName]);

  return (
    <section className='navbar'>
      <span>
        <Link to='/'>
          <button
            className={activeBtn === 'Home' ? 'btn active' : 'btn'}
            onClick={() => setActiveBtn('Home')}
          >
            <FcHome className='btn-icon' />
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
            <FcSearch className='btn-icon' />
            <span>Search</span>
          </button>
        </Link>
      </span>
    </section>
  );
};

export default Navbar;
