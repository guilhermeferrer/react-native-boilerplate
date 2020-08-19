import React, { useState } from 'react';

import { Container, Input, Button, ButtonText, Scroll, Todo } from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { addToDo } from '../../store/modules/todo/action';

export default function Home() {

    const [todo, setTodo] = useState();
    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();

    return (
        <Container>
            <Input
                placeholder='Add a todo'
                onChangeText={setTodo}
            />
            <Button
                onPress={() => dispatch(addToDo(todo))}
            >
                <ButtonText>Add</ButtonText>
            </Button>
            <Scroll>
                {
                    todos.map((todo, index) => (
                        <Todo key={index}>• {todo}</Todo>
                    ))
                }
            </Scroll>
        </Container>
    )
}