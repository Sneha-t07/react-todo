import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", textAlign: "center" }}>
      <h2>React Todo App</h2>
      <div style={{ marginBottom: 20 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a todo"
          style={{ padding: "8px", width: "70%" }}
        />
        <button onClick={addTodo} style={{ padding: "8px 12px", marginLeft: "5px" }}>
          Add
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo, i) => (
          <li
            key={i}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              marginBottom: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#f5f5f5",
              padding: "8px",
              borderRadius: "4px"
            }}
          >
            <span
              onClick={() => toggleTodo(i)}
              style={{ cursor: "pointer", flex: 1, textAlign: "left" }}
              title="Toggle complete"
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(i)} style={{ marginLeft: "10px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && <p>No todos yet!</p>}
    </div>
  );
}

export default App;
