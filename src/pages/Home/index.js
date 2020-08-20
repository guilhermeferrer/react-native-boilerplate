import React, { useState } from 'react';

import { Container, Input, Button, ButtonText, Scroll, Todo } from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/modules/user/action';

export default function Home() {

    const [name, setName] = useState();
    const users = useSelector(state => state.user.users);
    const dispatch = useDispatch();

    return (
        <Container>
            <Input
                placeholder='Search a user'
                onChangeText={setName}
            />
            <Button
                onPress={() => dispatch(getUser(name))}
            >
                <ButtonText>Add</ButtonText>
            </Button>
            <Scroll>
                {
                    users.map((user, index) => (
                        <Todo key={index}>• {user.login}</Todo>
                    ))
                }
            </Scroll>
        </Container>
    )
}