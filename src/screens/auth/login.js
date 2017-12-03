import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
} from 'react-native';

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="Signup" onPress={() => this.props.navigation.navigate("Signup")} />
                <Button title="Forgot Password" onPress={() => this.props.navigation.navigate("ForgotPassword")} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
});
