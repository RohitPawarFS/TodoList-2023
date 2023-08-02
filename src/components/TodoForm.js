import React, {useState} from 'react'
import styled from "styled-components";

const TodoForm1 = styled.form`
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


export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
          addTodo(value);
          setValue('');
        }
      };
  return (
    <TodoForm1 onSubmit={handleSubmit}>
    <TodoInput type="text" value={value} onChange={(e) => setValue(e.target.value)}  placeholder='Hi, Rohit Add Today&#39;s Task' />
    <TodoBtn type="submit" >Add Task</TodoBtn>
  </TodoForm1>
  )
}