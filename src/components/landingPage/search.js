import React from 'react';

const Search = () => {
  return (
    <div>
      <div className="row">
        <div className="col s12">
          <div className="card-panel grey lighten-5 z-depth-1">
            <div className="input-field  red-text center">
              <i className="red-text material-icons prefix">search</i>
              <input
                type="text"
                placeholder="search"
                id="autocomplete-input"
                className="autocomplete red-text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
