import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, List, ListItem, Text, Separator } from 'native-base';

export default class UsersListScreen extends Component {
    navigate = (id, type) => {
        this.props.navigation.navigate('Users', { id, type });
    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Users List</Title>
                    </Body>
                </Header>
                <Content>
                    <List style={{ backgroundColor: 'white' }}>
                        <Separator bordered>
                            <Text>Redux-Thunk Actions</Text>
                        </Separator>
                        <ListItem onPress={() => this.navigate(0, 'thunk')}>
                            <Title>First list</Title>
                        </ListItem>
                        <ListItem last onPress={() => this.navigate(1, 'thunk')}>
                            <Title>Second list</Title>
                        </ListItem>
                        <Separator bordered>
                            <Text>RxJS Actions</Text>
                        </Separator>
                        <ListItem onPress={() => this.navigate(0, 'rxjs')}>
                            <Title>First list</Title>
                        </ListItem>
                        <ListItem last onPress={() => this.navigate(1, 'rxjs')}>
                            <Title>Second list</Title>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
