const Header = ({ firstName, lastName }) => {
  return (
    <section className='header'>
      <p className='firstname'> {firstName}</p>
      <p className='secondname'> {lastName}</p>
    </section>
  );
};

export default Header;
