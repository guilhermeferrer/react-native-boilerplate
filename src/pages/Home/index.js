import React, { useState } from 'react';

import { Container, Input, Button, ButtonText, Scroll, Todo } from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/modules/user/action';

import UserCard from '../../components/UserCard';

export default function Home() {

    const [name, setName] = useState();
    const users = useSelector(state => state.user.users);
    const dispatch = useDispatch();

    return (
        <Container>
            <Input
                placeholder='Search for a github user'
                onChangeText={setName}
            />
            <Button
                onPress={() => dispatch(getUser(name))}
            >
                <ButtonText>Search</ButtonText>
            </Button>
            <Scroll>
                {
                    users.map((user, index) => (
                        <UserCard user={user} key={index}>

                        </UserCard>
                    ))
                }
            </Scroll>
        </Container>
    )
}