const Header = (app) => {
  return (
    <section className='header'>
      <p className='firstname'> {app.firstName}</p>
      <p className='secondname'> {app.secondName}</p>
    </section>
  );
};

export default Header;
