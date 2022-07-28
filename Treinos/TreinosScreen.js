import React from 'react'
import {Image, View, Text, StyleSheet, Button} from 'react-native'
import Constants from 'expo-constants'


import BotaoCustom from '../Login/BotaoCustom'
import logo from '../assets/testewc.png'

export default ({navigation}) => {
  return (
      <View style={styles.container}>    
      <Text style={styles.title}>
        Rotina A: Puxar
      </Text> 
      <Image source={logo} style={styles.image} />
      <Text style={styles.text}>Seu cadastro está completo, agora já pode prosseguir com o uso do aplicativo.</Text>
      <View style={styles.botao}>            
        <BotaoCustom 
          title='Começar'
          color='#525252'
          onPress={() => navigation.navigate('HomeAluno')}
        />
      </View>   
      </View>        
  );
}

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#1A1D22', 
    marginTop: Constants.statusBarHeight
  },

  title: {
    color: 'white',
    fontSize: 36,
    textAlign: 'center',
    padding: 15,      
  },
  image: {
    width: 150,
    height: 150,   
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 100,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 12,
    color: 'white',
    padding: 18,
    marginBottom: 144,
    height: 39,
    width: 216,
  },
  botao: {
    alignItems: 'center',
    height: 50,
    width: 50,
  },
})