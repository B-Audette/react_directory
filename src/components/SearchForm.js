import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="enter name or phone number//clear between searches//click search when empty to reload"
          id="searchEmployees"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-secondary mt-3 resultlist">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
