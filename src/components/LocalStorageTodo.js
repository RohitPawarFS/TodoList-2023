import React, {useState, useEffect} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { TodoList } from './TodoList';
import { TodoEditForm } from './TodoEditForm';
import styled from "styled-components";
import { mobile } from "../responsive";

const TodoContainer = styled.div`
  background: var(--back-color);
  margin-top: 5rem;
  padding: 2rem;
  border-radius: 5px;
  ${mobile({ marginTop: "0px", borderradius: "0px"})};
`;

uuidv4();

export const LocalStorageTodo = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        if (savedTodos.length === 0) {
            const defaultTodos = [
                { id: uuidv4(), task: "Finish the Assignment", completed: false, isEditing: false },
                { id: uuidv4(), task: "Learn React.js", completed: true, isEditing: false },
                // Add more default todos here as needed
            ];
            savedTodos.push(...defaultTodos);
            localStorage.setItem('todos', JSON.stringify(savedTodos));
        }
        setTodos(savedTodos);
    }, []);

    const addTodo = todo => {
        const newTodos = [...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const toggleComplete = id => {
        const newTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const deleteTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        const newTodos = todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }
  return (
    <TodoContainer>
        <h1>Task Manager</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
            todo.isEditing ? (
                <TodoEditForm editTodo={editTask} task={todo} />
            ) : (
                <TodoList task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
            )
            
        ))}
         
    </TodoContainer>
  )
}