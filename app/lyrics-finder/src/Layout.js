import './styles.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const Layout = ({ children }) => {
  //userInfo object is for future use
  const user = { firstName: 'John', secondName: 'Doe' };
  const app = { firstName: 'Lyrics', secondName: 'Finder' };
  return (
    <section className='container'>
      <section className='primary'>
        <Header {...app} />
        <Navbar {...app} />
        <Profile {...user} />
        <Footer />
      </section>
      <section className='secondary'>{children}</section>
    </section>
  );
};

export default Layout;
