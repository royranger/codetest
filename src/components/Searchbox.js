import React from 'react';

const Searchbox = ({onSearchChange, handleEnter, searchTerm}) => {
  return(
    <div className='pa2 tr'>
      <input
        className='pa2 ba b--green bg-light-green'
        type='search'
        placeholder='search gifs'
        value={searchTerm}
        onChange={onSearchChange}
        onKeyPress={handleEnter}
      />

    </div>
  );
};

export default Searchbox;
