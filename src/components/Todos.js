import React from "react";

const Todos = ({ todos, deleteTodo, editTodo, editedInputValue, animate }) => {
  const editedTodo = (id) => {
    if (editedInputValue.id === id) {
      return editedInputValue.val;
    }
  };
  console.log(animate);
  return (
    <ul className="collection">
      {todos.map((todo) => (
        <li
          className="collection-item li"
          key={todo.id}
          style={{
            cursor: "pointer",
          }}
        >
          {" "}
          {editedTodo(todo.id) ? editedTodo(todo.id) : todo.title}
          <i
            className="material-icons right red-text"
            onClick={() => deleteTodo(todo.id)}
          >
            delete
          </i>
          <i
            className="material-icons right red-text"
            onClick={() => {
              editTodo(todo.title, todo.id);
              deleteTodo(todo.id);
            }}
          >
            edit
          </i>
        </li>
      ))}
      <div></div>
    </ul>
  );
};

export default Todos;
