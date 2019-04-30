import React, { PropTypes } from "react";

const SearchForm = props => (
  <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
    <input
      className="place-input"
      type="text"
      size="30"
      value={props.place}
      onChange={e => props.onPlaceChange(e.target.value)}
    />
    <input className="submit-button" type="submit" value="検索" />
  </form>
);

// バリデーション
SearchForm.propTypes = {
  onPlaceChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  place: PropTypes.string.isRequired
};

export default SearchForm;
