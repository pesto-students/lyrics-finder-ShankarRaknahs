import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <section className='footer'>
        <a
          href='https://www.linkedin.com/in/shankar-ganesan-4a443671/'
          className='social'
        >
          <FaLinkedinIn className='image' />
        </a>
        <a href='https://github.com/ShankarRaknahs' className='social'>
          <FaGithub className='image' />
        </a>
        <a href='https://github.com/ShankarRaknahs' className='social'>
          <FaWhatsapp className='image' />
        </a>
      </section>

      <section className='copyright'>
        <p> copyright &copy; 2021</p>
      </section>
    </>
  );
};

export default Footer;
