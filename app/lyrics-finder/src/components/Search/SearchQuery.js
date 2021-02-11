import { useState, useCallback } from 'react';
import ListData from '../List/ListData';
import _ from 'lodash';
import getData from '../../api/getData';
import CONFIG from '../../config/app.config';
import Filters from '../Filters/Filters';

const SearchQuery = () => {
  const [searchObj, setSearchObj] = useState({
    query: '',
    data: [],
    isLoading: false,
  });

  const [apiStatus, setApiStatus] = useState({
    code: CONFIG.HTTP_SUCCESS_CODE,
    statusText: '',
  });

  const onSearch = ({ target: { value } }) => {
    setSearchObj({ isLoading: true }, debouncedCallback(value));
    setApiStatus({ code: CONFIG.HTTP_SUCCESS_CODE, statusText: '' });
  };

  const fetchData = (query) => {
    const url = new URL(query, CONFIG.SEARCH_API);
    query.trim() !== ''
      ? getData(url)
          .then((suggestions) => {
            setSearchObj({
              query: query,
              data: suggestions['data'],
              isLoading: false,
            });
          })
          .catch((error) => {
            setSearchObj({
              data: [],
              isLoading: false,
            });
            setApiStatus({ code: error.status, statusText: error.statusText });
          })
      : setSearchObj({ query: query, data: [], isLoading: false });
  };

  const debounced = _.debounce(fetchData, CONFIG.SEARCH_DEBOUNCE_TIME);
  const debouncedCallback = useCallback(debounced, []);

  return (
    <section className='search'>
      <div className='query'>
        <input
          type='text'
          className='search-bar'
          placeholder='Search for Albums or Songs'
          onChange={onSearch}
        />
      </div>
      {apiStatus.code === CONFIG.HTTP_SUCCESS_CODE ? (
        <div className='result'>
          {searchObj.isLoading ? (
            <p className='loader'> Loading ...</p>
          ) : searchObj.data.length > 0 ? (
            <ListData category='#Your Songs' data={searchObj.data} />
          ) : searchObj.query !== '' ? (
            <div> {CONFIG.NO_RESULT_FOUND} </div>
          ) : (
            <Filters filterCategories={CONFIG.FILTER_CATEGORIES} />
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

export default SearchQuery;
