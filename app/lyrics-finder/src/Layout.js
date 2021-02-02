import './styles.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const Layout = ({ children }) => {
  return (
    <section className='container'>
      <section className='primary'>
        <Header />
        <Navbar />
        <Profile />
        <Footer />
      </section>
      <section className='secondary'>{children}</section>
    </section>
  );
};

export default Layout;
