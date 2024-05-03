import React, { useState, useReducer } from "react";
import Todo from './src/components/ToDoList/Todo'

// actions.type maa huna sakni value jun anusar chahi dispatch garda reducer function ko switch statement chalxa
export const ACTIONS = {
    ADD_TODO : 'add-todo',
    TOGGLE_TODO : 'toggle-todo',
    DELETE_TODO : 'delete-todo'
};

// dispatch garexi yei chalxa, yesle state ra action linxa...yeta state ta aba simply todos vayo agi useReducer garda kheri ko...ani actions vanya chhai euta object ho, jasko type chhai dispatch garni bela set garinxa
// yei reducer function mai huni ho hamro switch statement
const reducer = (todos, action) => {
    switch(action.type){

        // aba yo first case mai hernu parda name vanerw muni ta define garya xam tarw access ta garna mildaina ni bahira
        // so action.payload bata chahi tyo data lina sakinxa
        // payload vanni obj maa chahi tyo specific action type perform garna jj value chahinxa sab hunxa
        // muni dispatch function of add todo maa hererw bujhinxa
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]

        case ACTIONS.TOGGLE_TODO:
            return todos.map( todo => {
                if (todo.id === action.payload.id) return {...todo, complete: !todo.complete}           // complete status lai toggle garey pugxa
                return todo
            })

        case ACTIONS.DELETE_TODO:
            return todos.filter( todo => todo.id !== action.payload.id)

        default:
            return todos
    }
};

const newTodo = (name) => {
    return {id: Date.now(), name: name, complete: false}
    // aba already existent todos array maa spead operator lagayera ajha tesma newTodo bata naya euta item ni jodyo, jasto complete status is false
}

const handleSubmit = (e) => {
    e.preventDefault();                     // refresh huna bata bachauxa
    dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}})  // action.type , action,payload.name haru garerw access garna milxa
    setName('');
}

export default function ToDoList() {
    const [name, setName] = useState('');
  const [todos, dispatch] = useReducer(reducer, []);
//   RHS -> reducer vanni function chahi dispatch le execute handinxa, ani empty array vaneko chahi aba todos vanni ko initial value
//   LHS -> todos vanya hamro state vayo, jasko value change hunxa...ani dispatch vanni hanexi chahi jun action.type ho tei anusar reducer function ko switch statement chalera todos maa changes lyauxa.

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>            // dispatch lai ni as a props pathauna pauxa
      })}
    </>
  );
}
