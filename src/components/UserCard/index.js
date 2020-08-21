import React from 'react';

import { Container, Row, Column, Avatar, Name, Bio } from './styles';

export default function UserCard({ user }) {

    const { avatar_url, name, bio } = user;

    return (
        <Container>
            <Row>
                <Avatar source={{ uri: avatar_url }} />
                <Column>
                    <Name>{name}</Name>
                    <Bio>{bio}</Bio>
                </Column>
            </Row>
        </Container>
    );
}