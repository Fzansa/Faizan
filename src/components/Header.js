import React from 'react'

const Header = (props) => {
  const { search, onInputChange,onSearch} = props;
  return (
    <div className="jumbotron">
      <h1 className='display-1 heading'><span className="material-symbols-outlined brand-icon">
        fastfood
      </span>Food Recipe</h1>

      <div className="input-group searcField mx-auto ">
        <input
          type="text"
          className="form-control fs-5 px-3 "
          placeholder='Search Your  Recipe ....'
          value={search}
          onChange={onInputChange}
        />
        <span className="btn btn-dark searcBtn" onClick={onSearch}>Search</span>
      </div>

    </div>
  );
};

export default Header