import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';
import { VERSION } from 'react-native-dotenv';
import { StackNavigator } from 'react-navigation';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';

import configureStore from './store';

import {
    LoginScreen,
    SignupScreen,
    ForgotPasswordScreen,
} from './screens/auth';

import {
  UsersListScreen,
  UsersScreen,
} from './screens/users';

const { store, persistor } = configureStore();

const AuthStack = StackNavigator({
    UsersList: { screen: UsersListScreen },
    Users: { screen: UsersScreen },
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
    ForgotPassword: { screen: ForgotPasswordScreen },
}, { headerMode: 'none' });

const LoadingScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ fontSize: 30 }}>{VERSION}</Text>
  </View>
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          persistor={persistor}
          loading={<LoadingScreen />}
        >
          <AuthStack />
        </PersistGate>
      </Provider>
    );
  }
}
