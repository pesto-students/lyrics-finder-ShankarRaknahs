import CONFIG from '../../config/app.config';
import React, { useEffect } from 'react';
import ListData from '../List/ListData';
import getData from '../../api/getData';

const Filters = ({ filterCategories }) => {
  const [filterObj, setFilterObj] = React.useState({
    query: filterCategories[0].keyword,
    data: [],
    activeFilter: filterCategories[0].name,
    isLoading: false,
  });

  const [apiStatus, setApiStatus] = React.useState({
    code: CONFIG.HTTP_SUCCESS_CODE,
    statusText: '',
  });

  const onBtnClick = (category) => {
    const query = category.keyword;
    const url = new URL(query, CONFIG.SEARCH_API);

    getData(url)
      .then((suggestions) => {
        setFilterObj({
          activeFilter: category.name,
          data: suggestions['data'],
          isLoading: false,
        });
      })
      .catch((error) => {
        setFilterObj({ data: [], isLoading: false });
        setApiStatus({ code: error.status, statusText: error.statusText });
      });
  };

  useEffect(() => {
    const defaultFilter = filterCategories[0];
    onBtnClick(defaultFilter);
  }, []);

  return (
    <section className='filter'>
      <div className='filter-group'>
        <ul className='filter-list'>
          {filterCategories.map((category) => (
            <li key={category.id}>
              <button
                className={
                  filterObj.activeFilter === category.name
                    ? 'filter-btn-active'
                    : 'filter-btn'
                }
                onClick={() => onBtnClick(category)}
              >
                <span>{category.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='filter-data'>
        {/* {console.log(filterObj.data)} */}
        {filterObj.data.length > 0 ? (
          <ListData category={filterObj.activeFilter} data={filterObj.data} />
        ) : (
          <span>Loading ...</span>
        )}
      </div>
    </section>
  );
};

export default Filters;
