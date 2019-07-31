import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import { Search } from "./components/search-box/search-box.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(raspuns => raspuns.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChage = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Mosters Cards</h1>
        <Search placeholder="search monsters" handleChage={this.handleChage} />
        <CardList monstri={filteredMonsters} />
      </div>
    );
  }
}

export default App;
