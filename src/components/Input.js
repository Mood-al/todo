import React, { useState, useEffect } from "react";
const Input = ({ addTodo, renderError, todoVal, editedInputVal }) => {
  const [item, setItem] = useState("");
  const onInputChange = (e) => {
    setItem(e.target.value);
    editedInputVal(item, todoVal.id);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    editedInputVal("", "");
    if (item) {
      addTodo(item);
      setTimeout(renderError(""), 3000);
    } else {
      setTimeout(renderError("you must type something"), 3000);
      // renderError('')
    }
    setItem("");
  };

  useEffect(() => {
    setItem(todoVal.val);
  }, [todoVal]);
  return (
    <div className="input-field">
      <form onSubmit={onFormSubmit}>
        <label htmlFor="type something"></label>
        <input
          type="text"
          placeholder="type something "
          value={item}
          onChange={onInputChange}
        />
        <button
          className="btn-floating btn-large waves-effect waves-light red"
          style={{ margin: "auto", display: "block" }}
        >
          <i className="material-icons">add</i>
        </button>
      </form>
    </div>
  );
};

export default Input;
