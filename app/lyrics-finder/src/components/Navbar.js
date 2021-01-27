const Navbar = () => {
  return (
    <ul className='nav-actions'>
      <li>
        <button className='btn'>
          <span>Home </span>
        </button>
      </li>
      <li>
        <button className='btn active'>
          <span>Search </span>
        </button>
      </li>
    </ul>
  );
};

export default Navbar;
