import React from 'react';
import ListData from '../List/ListData';
import _ from 'lodash';

const SearchQuery = () => {
  const API_PATH = 'https://api.lyrics.ovh/suggest/';
  const [searchObj, setSearchObj] = React.useState({
    query: '',
    data: [],
    isLoading: false,
  });

  const handleInputChange = ({ target: { value } }) => {
    setSearchObj({ isLoading: true }, debouncedFetchData(value));
  };

  const fetchData = (query) => {
    const url = API_PATH + query;
    query !== ''
      ? fetch(url)
          .then((response) => response.json())
          .then((value) => {
            setSearchObj({ data: value['data'], isLoading: false });
          })
      : setSearchObj({ data: [], isLoading: false });
  };

  const debouncedFetchData = React.useCallback(
    _.debounce((query) => fetchData(query), 1000),
    []
  );

  return (
    <section className='search'>
      <div className='query'>
        <input
          type='text'
          className='search-bar'
          placeholder='Search for Albums or Songs'
          onChange={handleInputChange}
        />
      </div>
      <div className='result'>
        {searchObj.isLoading ? (
          <p className='loader'> Loading ...</p>
        ) : searchObj.data.length > 1 ? (
          <ListData category='#Search Results' data={searchObj.data} />
        ) : null}
      </div>
    </section>
  );
};

export default SearchQuery;
