import React from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <AddTodo />
      <Todos />
    </div>
  );
}
