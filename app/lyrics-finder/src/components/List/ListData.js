import { useEffect, useState } from 'react';
import { MdPerson } from 'react-icons/md';
import Reader from '../Reader/Reader';

const ListData = ({ category, data }) => {
  const [activeItem, setActiveItem] = useState({
    artist: data[0].artist.name,
    title: data[0].title,
    mp3: data[0].preview,
    image: data[0].artist.picture,
    activeItemId: data[0].id,
  });

  useEffect(() => {
    //    console.log(activeItem);
  }, [activeItem]);

  return (
    <section className='search-results'>
      <div className='list-data'>
        <div className='category'>
          <button className='header'>{category}</button>
          <hr className='ruler' />
        </div>
        <ul>
          {data.map((item) => (
            <li
              key={item.id}
              className={
                activeItem.activeItemId === item.id ? 'list-active' : 'list'
              }
              onClick={() =>
                setActiveItem({
                  artist: item.artist.name,
                  title: item.title,
                  mp3: item.preview,
                  image: item.artist.picture,
                  activeItemId: item.id,
                })
              }
            >
              <div className='list-cover'>
                <img
                  src={item.album.cover}
                  alt='Album Cover'
                  width={70}
                  height={70}
                />
              </div>
              <div className='list-details'>
                <p className='list-title'>{item.title_short}</p>
                <div className='list-icon'>
                  <MdPerson />
                  <span className='list-artist'>{item.artist.name}</span>
                </div>
                <div className='list-album'>{item.album.title}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='lyric-reader'>
        <Reader
          artist={activeItem.artist}
          title={activeItem.title}
          mp3={activeItem.mp3}
          image={activeItem.image}
        />
      </div>
    </section>
  );
};

export default ListData;
