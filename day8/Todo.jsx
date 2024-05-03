import React from "react";
import {ACTIONS} from './src/components/ToDoList/ToDoList';
export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})}>Done</button>
      <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO })}>Delete</button>
    </div>
  );
}
