import React from "react";
import "./App.css";
import Todo from "./Todo";

class List extends React.Component {
  renderItems = () => {
    const { items } = this.props;
    return items.map((item) => {
      return (
        <Todo
          todoClick={this.props.itemClick}
          key={item.id}
          id={item.id}
          name={item.name}
          complete={item.complete}
        />
      );
    });
  };
  render() {
    return (
      <>
        <h1>Grocery List</h1>
        {this.renderItems()}
      </>
    );
  }
}

export default List;


