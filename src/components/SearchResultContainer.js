import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import Hero from "./Hero"
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    allResults: [],
    filteredResults: []
  };

  // When this component mounts, display all employees???
  componentDidMount() {
    API.getEmployeeData()
    .then(res => {
      console.log(res)
      console.log(res.data.results)
      this.setState({ allResults: res.data.results, filteredResults: res.data.results })

    })
    .catch(err => console.log(err));
  }

  // need a way to set each employee to a list item on the page


 // set up a click event to find one - needs more logic?
 /* getEmployeeData() {
    API.getEmployeeData()
    .then(res => {
      console.log(res)
      console.log(res.data.results)
      this.setState({ results: res.data.results })
    });
  }*/
  


  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name)
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the employees to filter? for `this.state.search`?? re-sue the get employees call? what do here?
  handleFormSubmit = event => {
    event.preventDefault();
    //this.getEmployeeData(this.state.search)
    const filtered = this.state.allResults.filter(result => {
      return result.name.first.includes(this.state.search)
    } )

    this.setState({filteredResults: filtered})
  };
  handleSort = event => {
    event.preventDefault();
    console.log("sort");
  }

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
        <ResultList results={this.state.filteredResults} 
        handleSort={this.handleSort}/>
      </div>
    );
  }
}

export default SearchResultContainer;
