import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants'
import { IconButton, Colors } from 'react-native-paper';
import BuscarAluno from '../Cadastro/BuscarAluno'

import BotaoTreino from './BotaoTreino'

export default ({navigation}) => {
  return (
      <View style={styles.container}> 
      <Text style={styles.text}> Ultimo Treino: A em maio de 2022</Text>
      <Text style={styles.text}> Validade do Treino: 31 de junho de 2022</Text>
        <View style={styles.treinos}>     
          <BotaoTreino style={styles.botao}
          title='A'
          onPress={() => navigation.navigate('TreinoScreen')}
          />
          <BotaoTreino
          title='B'
          onPress={() => navigation.navigate('B')}
          />
          <BotaoTreino
          title='C'
          onPress={() => navigation.navigate('B')}
          />
        </View>
        <View style={styles.menu}>
            <IconButton
              icon="account"
              color='#F0EDE1'
              size={30}
              onPress={() => navigation.navigate('B')}
            />
            <IconButton
              icon="calendar"
              color='#F0EDE1'
              size={30}
              onPress={() => navigation.navigate('B')}
            />
            <IconButton
              icon="chart-line"
              color='#F0EDE1'
              size={30}
              onPress={() => navigation.navigate('B')}
            />
            <IconButton
              icon="barcode-scan"
              color='#F0EDE1'
              size={30}
              onPress={() => navigation.navigate('B')}
            />
            <IconButton
              icon="account-group"
              color='#F0EDE1'
              size={30}
              onPress={() => navigation.navigate('BuscarAluno')}
            />
          </View>         
      </View>     
  );
}

const styles = StyleSheet.create({
  container: {   
    flex: 1,    
    padding: 10,
    backgroundColor: '#1A1D22', 
    marginTop: Constants.statusBarHeight   
  },
  botao : {
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius:100,    
  },
  treinos: {
    flexDirection: 'row',
    justifyContent:'space-around',
    marginTop: 150,
  },
  text:{
    color: 'white',
    textAlign: 'right',
  },
  menu: {
    flexDirection:'row',
    marginTop: 240,
    alignContent: 'center',
    justifyContent: 'center',    
  }
})