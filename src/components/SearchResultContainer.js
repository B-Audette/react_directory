import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import Hero from "./Hero"
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search for employees
  componentDidMount() {
    API.getEmployeeData()
    .then(res => {
      console.log(res)
      console.log(res.data.results)
      this.setState({ results: res.data.results })

    })
    .catch(err => console.log(err));
  }


  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the employees API for `this.state.search`?? what do here?
  handleFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
         <Hero backgroundImage="https://c1.wallpaperflare.com/preview/900/267/712/leaf-green-wall-pink.jpg">
        <h1>Employee Database</h1>
        <h4>Search Employees</h4>
      </Hero>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
