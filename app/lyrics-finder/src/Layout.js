import './styles.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const Layout = ({ children }) => {
  //userInfo object is for future use
  const userInfo = { name: 'John Doe' };

  return (
    <section className='container'>
      <section className='primary'>
        <Header firstName='Lyrics' lastName='Finder' />
        <Navbar firstName='Lyrics' lastName='Finder' />
        <Profile {...userInfo} />
        <Footer />
      </section>
      <section className='secondary'>{children}</section>
    </section>
  );
};

export default Layout;
