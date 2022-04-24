import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import action from "./todos-actions";

const items = createReducer([], {
  [action.addTodos]: (state, { payload }) => [...state, payload],
  [action.deliteTodos]: (state, { payload }) =>
    state.filter((cont) => cont.id !== payload),
  [action.toggleCompleted]: (state, { payload }) => state.map(todo =>
        todo.id === payload
          ? {...todo, completed: !todo.completed,}
          : todo
      ),
});
const filter = createReducer("", {
  [action.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

