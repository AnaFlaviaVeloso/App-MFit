import React from 'react'
import {Image, View, Text, StyleSheet, Button} from 'react-native'
import Constants from 'expo-constants'

import BotaoCustom from '../Login/BotaoCustom'
import foto from '../assets/imgFoto.png'
import WCSreen from './WCScreen'

export default ({navigation}) => {
  return (
    <View style={styles.menu}>
      <View style={styles.container}>    
      <Text style={styles.title}>
         Escolha sua
         {'\n'}
         foto
      </Text> 
      <Image source={foto} style={styles.image} />     
      <View style={styles.botoes}>            
          <BotaoCustom 
          title='Salvar foto'
          color='#525252'
          onPress={() => navigation.navigate('FotoScreen')}
          />
      </View>  
      <Text style={styles.text}
      onPress={() => navigation.navigate('WCScreen')}>Pular por enquanto</Text>       
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
  menu: {
   flex: 1,
   justifyContent: 'center', 
  },
  title: {
    color: 'white',
    fontSize: 36,
    textAlign: 'center',
    padding: 15,      
  },
  image: {
    width: 216,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#282C35',
    borderRadius:100,
  },
  text: {
    backgroundColor: '#1A1D22',
    fontFamily: 'Roboto',
    fontSize: 12,
    color: 'white',
    alignSelf: 'flex-end',
    marginRight: 72,
    marginTop: 20,
  },
      botoes: {
    marginTop: 199,
    alignItems:'center',  
  },
})