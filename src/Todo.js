import React from "react";

const Todo = (props) => {
  return (
    <li
      style={props.complete ? { ...styles.todo, ...styles.complete } : styles.todo}
      onClick={() => props.todoClick(props.id)}>
      {props.name}
      <br></br>
      <button  className="btn btn-warning"onClick={()=> this.props.onDelete(this.props.id)}>Edit</button>
      
      <button  className="btn btn-danger"onClick={()=> this.props.onDelete(this.props.id)}>Delete</button>
    </li>
  );
};

const styles = {
  todo: { cursor: "pointer", color: "#333" },
  complete: {
    textDecoration: "line-through",
  },
};
export default Todo;
