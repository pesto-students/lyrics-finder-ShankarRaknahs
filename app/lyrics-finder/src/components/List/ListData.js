import { MdPerson } from 'react-icons/md';

const ListData = ({ category, data }) => {
  return (
    <section>
      <div className='category'>
        <button className='header'>{category}</button>
        <hr className='ruler' />
      </div>
      <ul>
        {data.map((item) => (
          <li key={item.id} className='list'>
            <div className='column'>
              <div className='title'>{item.title_short}</div>
              <MdPerson className='icon' />
              <span className='artist'>{item.artist.name}</span>
            </div>
            <span className='album'>{item.album.title}</span>
            <hr className='divider' />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ListData;
