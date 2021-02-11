import React from 'react';
import { MdHome } from 'react-icons/md';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = (app) => {
  const [activeBtn, setActiveBtn] = React.useState('Home');

  React.useEffect(() => {
    // document.title = `${app.firstName} ${app.secondName} | ${activeBtn}`;
    document.title = `${app.firstName} ${app.secondName}`;
  }, [activeBtn, app.firstName, app.secondName]);

  return (
    <section className='navbar'>
      {/* <span>
        <Link to='/'>
          <button
            className={activeBtn === 'Home' ? 'btn active' : 'btn'}
            onClick={() => setActiveBtn('Home')}
          >
            <MdHome className='btn-icon' size={20} />
            <span>Home</span>
          </button>
        </Link>
      </span> */}
      {/* <span>
        <Link to='/search'>
          <button
            className={activeBtn === 'Search' ? 'btn active' : 'btn'}
            onClick={() => setActiveBtn('Search')}
          >
            <AiOutlineFileSearch className='btn-icon' />
            <span>Search</span>
          </button>
        </Link>
      </span> */}

      <span>
        <Link to='/'>
          <button
            className={'btn active'}
            onClick={() => setActiveBtn('Search')}
          >
            <AiOutlineFileSearch className='btn-icon' />
            <span>Library</span>
          </button>
        </Link>
      </span>
    </section>
  );
};

export default Navbar;
