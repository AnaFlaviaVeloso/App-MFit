import React, { useState, useEffect} from 'react'
import {ActivityIndicator, FlatList, View, StyleSheet, Text, Button, Image, TextInput, SafeAreaView, Keyboard, StatusBar } from 'react-native'
import Constants from 'expo-constants'
import Header from '../Login/Header';
import BotaoCustom from '../Login/BotaoCustom';
import FotoScreen from './FotoScreen'
import SearchBar from './SearchBar'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {buscarTodosCadastros, buscarPorId, salvarUsuario} from './CadastroAPI';

export default ({navigation}) => {
  const [nome, setNome] = useState('')
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  async function addContatos() {
    const tipo = 'filha'
    const nome = 'Kamila'
    const telefone = '31 95588-6655'

    const novoContato = {tipo, nome, telefone}
    const jsonValue = JSON.stringify(novoContato)
    await AsyncStorage.setItem('@ListaUsuarios', jsonValue )
  }

  async function handleGatUsers(){
    setLoading(true);
    fetch('https://QueimaBacon.anaflviaflvia3.repl.co/', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    .then( response => response.json() )
    .then( responseData => setData(responseData) )
    .finally(() => setLoading(false));
  }

  /*function fiilterUser( ){
    const filtered = data.filter(user => user.nome === "juju")
    setData(filtered)
  }*/

  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Queima Bacon
      </Text>
      <SearchBar />
        <View style={styles.lista}>
          <BotaoCustom 
            title='Buscar'
            color='#525252'
            onPress={handleGatUsers}
          />
        </View>        
      <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item})=><Text style={{color:"white"}}>{item.nome}</Text>}
        />
      )}
      </View>
        <View style={styles.botoes}>            
          <BotaoCustom 
          title='Salvar'
          color='#525252'
          onPress={() => navigation.navigate('FotoScreen')}
          />
        </View>  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#1A1D22', 
    marginTop: Constants.statusBarHeight,
  },
  title: {
    color: '#C4C4C4',
    fontSize: 36,
    textAlign: 'center',
    padding: 15,      
  },
    botoes: {
    marginTop: 0,
    alignItems:'center',  
  },
  lista: {
    marginTop: 15,
    alignItems:'center',  
  },
})