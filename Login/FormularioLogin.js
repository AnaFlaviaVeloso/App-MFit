import React, {Component} from "react"
import {SafeAreaView, StyleSheet, TextInput} from "react-native"
import {Text, Alert, Button, View } from 'react-native';
import AppLoading from 'expo-app-loading';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }
  render() {
    return (
      <View>
        <View style={styles.container}>        
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Usuário'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Senha'}
          secureTextEntry={true}
          style={styles.input}
        />
        </View>
      </View> 
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  input: {
    width: 280,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: '#483D8B',
    marginBottom: 10,
    color: 'white',
  },
});
