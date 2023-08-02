import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";
import { mobile } from "../responsive";
import moment from "moment";

const Todo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${ task => task.completed ? ' var(--back-color)' : ' var(--global-color)' };
  color: ${ task => task.completed ? ' var(--cancel-color)' : ' var(--text-color)' };
  padding: 0.75rem 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  cursor: pointer;
  border: ${ task => task.completed ? '1px solid var(--cancel-color)' : '0px' };
  ${mobile({ marginTop: "1rem"})};

`;

const Textdecoration = styled.p`
  text-decoration: ${ task => task.completed ? ' line-through' : '' };
`;

const Pdecoration = styled.p`
  font-size: xx-small;
  color: ${ task => task.completed ? ' var(--cancel-color)' : ' var(--text-color)' };
  text-align: right;

`;

export const TodoList = ({task, deleteTodo, editTodo, toggleComplete, }) => {
  const [formattedTime, setFormattedTime] = useState('');

  useEffect(() => {
    const currentTime = moment();
    const formattedTime = currentTime.calendar();
    setFormattedTime(formattedTime);
  }, []);
  return (
    <div>
      <Pdecoration completed={task.completed}>{formattedTime}</Pdecoration>
      <Todo completed={task.completed}>
        <Textdecoration completed={task.completed} onClick={() => toggleComplete(task.id)}>{task.task}</Textdecoration>
        <div>
          <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
      </Todo>
    </div>
  )
}