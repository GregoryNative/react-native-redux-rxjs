import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
} from 'react-native';

export default class SignupScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="Login" onPress={() => this.props.navigation.goBack()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
