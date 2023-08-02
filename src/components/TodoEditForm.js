import React, {useState} from 'react'
import styled from "styled-components";

const TodoForm = styled.form`
  width: 100%;
`;

const TodoBtn = styled.button`
  background: var(--global-color);
  color: var(--text-color);
  border: none;
  padding: 0.55rem;
  cursor: pointer;
`;

const TodoInput = styled.input`
  outline: none;
  background: none;
  border: 1px solid var(--global-color);
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 300px;
  color: var(--text-color);
`;

export const TodoEditForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
      };
  return (
    <TodoForm onSubmit={handleSubmit}>
    <TodoInput type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Update task' />
    <TodoBtn type="submit" >Add Task</TodoBtn>
  </TodoForm>
  )
}