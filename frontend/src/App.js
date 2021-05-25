import React, { Component } from "react";
import "./App.css";
import SearchForBook from "./components/SearchForBook"


class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="MainBorder">
          <SearchForBook/>
        </div>
      </div>
    );
  }
}

export default App;