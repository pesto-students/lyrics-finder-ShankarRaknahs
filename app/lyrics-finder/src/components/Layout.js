import './Layout.css';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import Profile from './Profile';

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

    // <article className='tweet'>
    //   <div className='content'>
    //     <div className='author-meta'>
    //       <span className='handle'>@handle</span>
    //       <span className='name'>Name</span>
    //       <span className='time'>3h ago</span>
    //     </div>
    //     <p>Some insightful message.</p>
    //     <ul className='actions'>
    //       <li>
    //         <button>Reply</button>
    //       </li>
    //       <li>
    //         <button>Retweet</button>
    //       </li>
    //       <li>
    //         <button>Like</button>
    //       </li>
    //       <li>
    //         <button>...</button>
    //       </li>
    //     </ul>
    //   </div>
    // </article>

    // <section className='container'>
    //   <div>
    //     <Header />
    //     <Footer />
    //   </div>
    //   <div>
    //     <h1>content area</h1>
    //   </div>
    // </section>
  );
};

export default Layout;
