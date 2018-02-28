import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDcyPX72Mt8cvsg7ETwpyirODDZ8-rr0MY',
    authDomain: 'authentication-645fc.firebaseapp.com',
    databaseURL: 'https://authentication-645fc.firebaseio.com',
    projectId: 'authentication-645fc',
    storageBucket: 'authentication-645fc.appspot.com',
    messagingSenderId: '975894102341'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An app</Text>
      </View>
    );
  }
};

export default App;
