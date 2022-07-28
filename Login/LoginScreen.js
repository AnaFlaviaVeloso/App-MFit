import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'



import logo from '../assets/LOGO1.png'
import BotaoCustom from './BotaoCustom'
import BotaoSignIn from './BotaoSignIn'
import mif from '../assets/MFIT.png'

export default ({navigation}) => {
  
  return(
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
        <View style={styles.image2}>
          <Image source={mif}/>
        </View>       
      <View style={styles.botoes}>
        <BotaoCustom
          title='Registrar'
          color='#525252'
          onPress={() => navigation.navigate('CadastroScreen')}
        />
        <BotaoSignIn
          title='Eu já tenho uma conta'
          color='#D7D2CC'
          onPress={() => navigation.navigate('HomeFuncio')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: '#1A1D22',    
  },
  botoes: {
    marginTop: 76,
    padding: 25,
    alignItems:'center',  
  },

  image: {
    width: 232,
    height: 264,   
    top: 88,
    alignSelf: 'center',

  },
    image2: {    
    justifyContent:'flex-end',
    padding: 12,  
    alignItems: 'center',
    width: 60,
    height: 168,   
    alignSelf: 'center',

  },
})
