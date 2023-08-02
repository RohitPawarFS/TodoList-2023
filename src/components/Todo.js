import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { TodoEditForm } from "./TodoEditForm";
import styled from "styled-components";
import { mobile } from "../responsive";

const TodoContainer = styled.div`
  background: var(--back-color);
  margin-top: 5rem;
  padding: 2rem;
  border-radius: 5px;
  ${mobile({ marginTop: "0px", borderradius: "0px"})};
`;

export const Todo = () => {
  const [todos, setTodos] = useState([
    { id: uuidv4(), task: "Finish the Assignment", completed: false, isEditing: false },
    { id: uuidv4(), task: "Learn React.js", completed: true, isEditing: false },
  ]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <TodoContainer>
      <h1>Task Manager</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <TodoEditForm editTodo={editTask} task={todo} />
        ) : (
          <TodoList
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </TodoContainer>
  );
};