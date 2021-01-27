import './Layout.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

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
