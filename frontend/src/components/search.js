import React, { Component } from "react";
import "../index.css";

class Search extends Component {
state = {};
render() {
    return (
        <div>
        <h1>eCommerce Book Search Service</h1>
        <input name="text" type="text" placeholder="Please enter the name of your book" />
        <button>Search</button>
        </div>
        );
}
}
export default Search;