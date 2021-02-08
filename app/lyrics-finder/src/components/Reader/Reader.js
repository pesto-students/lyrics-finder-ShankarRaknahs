import { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';
import getData from '../../api/getData';
import CONFIG from '../../config/app.config';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Reader = (track) => {
  const [lyricObj, setLyricObj] = useState({
    lyrics: '',
    isLoading: true,
    isError: false,
  });
  const [apiStatus, setApiStatus] = useState({
    code: CONFIG.HTTP_SUCCESS_CODE,
    statusText: '',
  });

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
  const debouncedCallback = useCallback(debounced, [debounced]);

  useEffect(() => {
    debouncedCallback(`${track.artist}/${track.title}`);
    return function cleanup() {
      setLyricObj({ isLoading: true });
    };
  }, [track]);

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
      </div>
      <div className='reader-player'>
        <AudioPlayer src={track.mp3} layout='horizontal' />
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
