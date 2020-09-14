import React from 'react';
import './App.css';
import List from './list';
import ItemForm from './ItemForm';


class App extends React.Component {
  state ={
    items: [
      {id:1, name:"Banana", complete: true,},
      {id:2, name:"Eggs", complete: false,},
      {id:3, name:"Milk", complete: false,},
    ]
  };


  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }

   addItem = (name) => {
    const { items } = this.state;
    const item = { name, id: this.getUniqId() , complete: false }
    this.setState({ items: [item, ...items] }); 
    }

  renderItems = () => {
    const {items, } = this.state;
    return items.map(item =>
      <li key={item.id}>{item.name}</li>
    )
  };

  render(){
    const {items} = this.state;
    return (
      <div>
          
          <List name="Grocery List" items={items} />
          <ItemForm addItem={this.addItem}/>
      </div>
    );
  }
}
export default App;
