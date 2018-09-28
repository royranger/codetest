import React from 'react';

const Searchbox = ({onSearchChange, handleEnter}) => {
  return(
    <div className='pa2 tr'>
      <input
        className='pa2 ba b--green bg-light-green'
        type='search'
        placeholder='search gifs'
        onChange={onSearchChange}
        onKeyPress={handleEnter}
      />

    </div>
  );
};

export default Searchbox;
