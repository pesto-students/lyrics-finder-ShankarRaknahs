import SearchBar from '../components/Search/SearchBar';

const SearchView = () => {
  return (
    <section className='search-page'>
      <div className='search-view'>
        <SearchBar />
      </div>
      <div className='result-view'></div>
    </section>
  );
};

export default SearchView;
