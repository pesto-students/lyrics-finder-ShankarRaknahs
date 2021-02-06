//! Work in progress component

import { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';

const Reader = ({ artist, title, mp3, image }) => {
  const [lyrics, setLyrics] = useState('');
  // const [_mp3, setMp3] = useState(mp3);
  const [isLoading, setIsLoading] = useState(false);
  const API_PATH = 'https://api.lyrics.ovh/v1/';

  useEffect(() => {
    setIsLoading(true);
    debouncedFetchData(`${artist}/${title}`);
  }, [artist, title, mp3, image]);

  const fetchData = (query) => {
    const url = API_PATH + query;
    query !== ''
      ? fetch(url)
          .then((response) => response.json())
          .then((value) => {
            setLyrics(value.lyrics);
            setIsLoading(false);
          })
      : setLyrics('Oh Sorry!');
  };

  const debouncedFetchData = useCallback(
    _.debounce((query) => fetchData(query), 1000),
    []
  );

  return (
    <section className='reader'>
      <div className='title-section'>
        <div className='cover'>
          <img src={image} alt='Album Cover' width={70} height={70} />
        </div>
        <div className='reader-title'>
          <p className='title'> {title}</p>
          <p className='artist'> {artist}</p>
        </div>
        <div className='reader-player'>
          <audio controls>
            <source src={mp3} />
          </audio>
        </div>
      </div>
      <div className='reader-section'>
        {isLoading ? (
          <p className='lyrics'>Loading ....</p>
        ) : lyrics !== '' ? (
          <pre className='lyrics'>{lyrics}</pre>
        ) : (
          <pre className='lyrics-notfound'>
            {' '}
            Sorry Lyrics for this song is currently not available...!
          </pre>
        )}
      </div>
    </section>
  );
};

export default Reader;
