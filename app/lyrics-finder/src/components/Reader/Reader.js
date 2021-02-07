import { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';
import getData from '../../api/getData';
import CONFIG from '../../config/app.config';

const Reader = (track) => {
  const [lyricObj, setLyricObj] = useState({
    lyrics: '',
    isLoading: false,
    isError: false,
  });
  const [apiStatus, setApiStatus] = useState({
    code: CONFIG.HTTP_SUCCESS_CODE,
    statusText: '',
  });

  useEffect(() => {
    setLyricObj(
      { isLoading: true },
      debouncedCallback(`${track.artist}/${track.title}`)
    );
  }, [track]);

  const fetchData = (query) => {
    const url = new URL(query, CONFIG.LYRICS_API);
    query !== ''
      ? getData(url)
          .then((response) => {
            response.lyrics !== ''
              ? setLyricObj({
                  lyrics: response.lyrics,
                  isLoading: false,
                  isError: false,
                })
              : setLyricObj({
                  lyrics: CONFIG.ERROR_MESSAGES.emptyResponse,
                  isLoading: false,
                  isError: true,
                });
          })
          .catch((error) => {
            setApiStatus({ code: error.status, statusText: error.statusText });
          })
      : setLyricObj({
          lyrics: CONFIG.ERROR_MESSAGES.NotProperRequest,
          isLoading: false,
          isError: true,
        });
  };

  const debounced = _.debounce(fetchData, CONFIG.LYRICS_DEBOUNCE_TIME);
  const debouncedCallback = useCallback(debounced, []);

  return (
    <section className='reader'>
      <div className='title-section'>
        <div className='cover'>
          <img src={track.image} alt='Album Cover' width={70} height={70} />
        </div>
        <div className='reader-title'>
          <p className='title'> {track.title}</p>
          <p className='artist'> {track.artist}</p>
        </div>
        <div className='reader-player'>
          <audio controls>
            <source src={track.mp3} />
          </audio>
        </div>
      </div>
      {apiStatus.code === CONFIG.HTTP_SUCCESS_CODE ? (
        <div className='reader-section'>
          {lyricObj.isLoading ? (
            <p className='lyrics'>Loading ....</p>
          ) : lyricObj.isError ? (
            <pre className='error-response'>{lyricObj.lyrics}</pre>
          ) : (
            <pre className='lyrics'>{lyricObj.lyrics}</pre>
          )}
        </div>
      ) : (
        <pre className='error-response'>{` ${CONFIG.ERROR_MESSAGES.apiError} 
        ${apiStatus.code} - ${apiStatus.statusText} 
        ${CONFIG.ERROR_MESSAGES.action}`}</pre>
      )}
    </section>
  );
};

export default Reader;
