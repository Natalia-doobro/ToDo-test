import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const addTodos = createAction("todos/Add", text => {
  return {
    payload: {
      id: shortid.generate(),
      text: text,
      completed: false,
    },
  };
});
const deliteTodos = createAction("todos/Delite");
const changeFilter = createAction("todos/ChangeFilter");
const toggleCompleted = createAction("todos/ToggleCompleted");

export default { addTodos, deliteTodos, changeFilter, toggleCompleted };