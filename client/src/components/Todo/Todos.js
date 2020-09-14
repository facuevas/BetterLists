import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import TodoItem from './TodoItem';
import axiosConfig from '../../services/axiosConfig';

const Todos = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axiosConfig.get('/')
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    });

    return(
        <Container maxWidth="lg">
            {todos.map(todo => {
                return <TodoItem key= {todo._id} todo={todo} />
            })}
        </Container>
    );
}

export default Todos;