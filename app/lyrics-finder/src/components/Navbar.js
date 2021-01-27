import React from 'react';
import { FcHome, FcSearch } from 'react-icons/fc';

const Navbar = () => {
  return (
    <section className='nav-actions'>
      <span>
        <button className='btn'>
          <FcHome size={20} />
          <span> Home </span>
        </button>
      </span>
      <span>
        <button className='btn active'>
          <FcSearch size={20} />
          <span> Search </span>
        </button>
      </span>
    </section>
  );
};

export default Navbar;
