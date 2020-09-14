import React from 'react';

class ItemForm extends React.Component {

  state = { name: '' }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name);
    this.setState({ name: '' })
  }


  render(){
    const { name } = this.state;
    return (
      <form on Submit = {this.handleSubmit}>
        <input
        value={name} 
        name="name"
        onChange={this.handleChange}
        required 
        placeholder="Add an Item" />
      </form>
    )
  }
}

export default ItemForm;