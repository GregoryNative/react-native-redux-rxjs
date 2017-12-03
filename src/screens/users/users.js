import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Header, Right, Body, Title, Content, List, ListItem, Text, Separator } from 'native-base';

import { fetchUsersThunk, cancelFetchUsers, getUsers } from '../../actions/users';
console.disableYellowBox = true;
class UsersScreen extends Component {
    componentDidMount() {
        const { id, type } = this.props.navigation.state.params;

        if (type === 'thunk') {
            this.props.fetchUsersThunk(id);
        }
        
        if (type === 'rxjs') {
            this.props.getUsers(id);
        }
    }

    componentWillUnmount() {
        this.props.cancelFetchUsers();
    }

    navigate = (id, type) => {
        this.props.navigation.navigate('Users', { id, type });
    }

    render() {
        const { users, isFetching, reducer } = this.props;

        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Users List</Title>
                    </Body>
                </Header>
                <Content>
                    {
                        isFetching &&
                        <Title>Fetching...</Title>
                    }
                    <List
                        style={{ backgroundColor: 'white' }}
                        dataArray={users}
                        renderRow={(user) => (
                            <ListItem>
                                <Body>
                                    <Text>{user.name}</Text>
                                </Body>
                                <Right>
                                    <Text note>{`Age: ${user.age}`}</Text>
                                </Right>
                            </ListItem>
                        )}
                    />
                    <Button full danger onPress={() => this.props.cancelFetchUsers()}>
                        <Text>CANCEL</Text>
                    </Button>
                    {/* <Text>{reducer}</Text> */}
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    isFetching: state.users.isFetching,
    users: state.users.data,
    reducer: JSON.stringify(state.users, null, 2),
});

export default connect(mapStateToProps, {
    fetchUsersThunk,
    getUsers,
    cancelFetchUsers,
})(UsersScreen);