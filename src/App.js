import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots,
      searchField: ""
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchField: event.target.value });
  }

  render() {
    let { searchField, robots } = this.state;
    const filteredRobots = robots.filter(robot =>
      robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase())
    );
    return (
      <div className="tc">
        <h1>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />;
      </div>
    );
  }
}

export default App;
