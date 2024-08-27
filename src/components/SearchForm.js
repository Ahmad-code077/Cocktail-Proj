import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');
  const handleCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  return (
    <section
      className='section search'
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            autoComplete='true'
            ref={searchValue}
            onChange={handleCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
