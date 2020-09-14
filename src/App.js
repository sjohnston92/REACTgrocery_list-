import React from "react";
import "./App.css";
import List from "./List";
import ItemForm from "./ItemForm";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "Banana", complete: false },
      { id: 2, name: "Milk", complete: false },
      { id: 3, name: "Eggs", complete: false },
    ],
  };

  handleClick = (id) => {
    console.log(id);
    const { items } = this.state;

    const newItem = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          complete: !item.complete,
        };
      }
      return item;
    });

    this.setState({
      items: newItem,
    });
  };
  addItem = (item) => {
    const { items } = this.state;
    const newItem = { id: Math.random(), name: item, complete: false };
    this.setState({
      items: [...items, newItem],
    });
  };
  render() {
    return (
      < div className="container">
        <List items={this.state.items} itemClick={this.handleClick} />
        <hr />
        <ItemForm add={this.addItem} />
      </div>
    );
  }
}

export default App;