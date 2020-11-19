import React from "react";

function ResultList(props) {
  return (
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Profile Photo</th>
      <th scope="col" onClick={props.handleSort}>
        Name
      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
  </svg>
  </th>
      <th scope="col">Phone Number</th>
      <th scope="col">Email</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody>
      {props.results.map((result, index) => {
       return  (

        <tr key={index}>
          <td><img alt="picture" src={result.picture.thumbnail}/></td>
          <td>{result.name.first} {result.name.last}
          </td>
          <td>{result.phone}
          </td>
          <td>{result.email}
          </td>
          <td>{result.location.city}
          </td>
        </tr>
      )})}
      </tbody>
      </table>
  );
}

export default ResultList;

