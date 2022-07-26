import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, clearTodos } from "./features/toDoSlice";

function Todo() {
  const items = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  
  const renderItems = items.map((item, index) => (
    <li key={index} onClick={() => dispatch(removeTodo(index))}>{item}</li>));

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
  };

  return (
    <div>
      <form onSubmit={(e) => submitForm(e)}>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => dispatch(clearTodos())}>Clear List</button>
      <ul>{renderItems}</ul>
    </div>
  );
}

export default Todo;
