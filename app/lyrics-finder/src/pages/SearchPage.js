import SearchBar from '../components/SearchBar';

const Search = () => {
  return (
    <section className='search-page'>
      <div className='search-view'>
        <SearchBar />
      </div>
      <div className='result-view'></div>
    </section>
  );
};

export default Search;
