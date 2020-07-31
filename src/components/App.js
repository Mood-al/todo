import React, { useState } from "react";
import "./App.css";
import Todos from "./Todos";
import Input from "./Input";
const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "make something",
    },
    {
      id: 2,
      title: "make somthing else",
    },
  ]);
  const [animate, setAnimate] = useState("");
  const [todoVal, setTodoVal] = useState({
    val: "",
    id: "",
  });
  const [error, setError] = useState("");
  const [editedInputValue, setEditedInputValue] = useState({ val: "", id: "" });

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);

    setAnimate("translateY(20px) rotateZ(20deg)");
    // transform: '
  };

  const addTodo = (val) => {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        title: val,
      },
    ]);
  };
  const editTodo = (val, id) => {
    setTodoVal({
      val,
      id,
    });
  };

  const editedInputVal = (val, id) => {
    setEditedInputValue({ val, id });
  };
  const renderError = (err) => {
    setError(err);
    setTimeout(() => {
      setError("");
    }, 2000);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div
            className="card-panel d-flex align-items-center"
            style={{ width: "100%", margin: "50px auto " }}
          >
            <h4 className="card-title">
              MyTodo App
              <i className="material-icons medium  light-blue-text">
                add_alarm
              </i>
            </h4>
            <Input
              addTodo={addTodo}
              renderError={renderError}
              todoVal={todoVal}
              editedInputVal={editedInputVal}
            />
            <Todos
              todos={todos}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              editedInputValue={editedInputValue}
              animate={animate}
            />
            <div
              className="red white-text center"
              style={{ borderRadius: "20px", width: "60%", margin: "auto" }}
            >
              {error}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
