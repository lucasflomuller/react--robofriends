import React, { Component } from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./MainPage.css";


class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    const { searchField } = this.props;
    
    return this.props.robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
  }

  render() {
    const { onSearchChange, isPending } = this.props;

    return isPending ?
      <h1>Loading...</h1> :
      (
      <div className="tc">
        <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundary>
          </Scroll>
      </div>
      )
    }
}

export default MainPage;
