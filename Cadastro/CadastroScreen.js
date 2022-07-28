import React, { useState } from 'react'
import {View, StyleSheet, Text, Button, Image, TextInput, SafeAreaView} from 'react-native'
import Constants from 'expo-constants'

import Header from '../Login/Header';
import BotaoCustom from '../Login/BotaoCustom';
import FotoScreen from './FotoScreen'

import {salvarUsuario, cadastraa} from './CadastroAPI';

export default (props) => {
  const navigation = props.navigation
  const [nome, setNome] = React.useState(null);
  const [idade, setIdade] = React.useState(null);
  const [cpf, setCpf] = React.useState(null);
  const [telefone, setTelefone] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [senha, setSenha] = React.useState(null);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  async function handleGatUsers(){
    setLoading(true);
    fetch('https://QueimaBacon.anaflviaflvia3.repl.co/', {
      method: 'POST',
      headers: { Accept: 'application/json',
    'Content-Type': 'application/json' },
    body: JSON.stringify({
    firstParam: 'nome',
    secondParam: 'idade'
      })
    })
    .then( response => response.json() )
    .then( responseData => setData(responseData) )
    .finally(() => setLoading(false));
  } 

  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        QUEIMA BACON
      </Text>
      <SafeAreaView>
      <TextInput
        style={styles.formulario}
        setNome={(nome) => setNome(nome)}
        value={nome}
        placeholder="Nome completo"
      />
      <TextInput
        style={styles.formulario}
        onChangeText={salvarUsuario.funcionario}
        value={idade}
        placeholder="Idade"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.formulario}
        onChangeText={salvarUsuario.funcionario}
        value={cpf}
        placeholder="CPF"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.formulario}
        onChangeText={salvarUsuario.funcionario}
        value={telefone}
        placeholder="Telefone"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.formulario}
        onChangeText={salvarUsuario.funcionario}
        value={email}
        placeholder="E-mail"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.formulario}
        onChangeText={salvarUsuario.funcionario}
        value={senha}
        placeholder="Senha"
        keyboardType="visible-password"

      />
      </SafeAreaView>
        <View style={styles.botoes}>            
          <BotaoCustom 
          title='Salvar usuario'
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
    marginTop: Constants.statusBarHeight
  },
  title: {
    color: '#C4C4C4',
    fontSize: 36,
    textAlign: 'center',
    padding: 15,      
  },
  formulario: {
    backgroundColor: '#494D56',
    alignItems: 'center',
    color: '#EAEAEA',
    height: 36,
    width: 217,
    margin: 12,
    borderRadius: 6,
    padding: 10,
  },
    botoes: {
    marginTop: 177,
    alignItems:'center',  
  },
})