import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from './Login/LoginScreen';
import HomeAluno from './TelaInicial/HomeAluno';
import CadastroScreen from './Cadastro/CadastroScreen';
import FotoScreen from './Cadastro/FotoScreen';
import WCScreen from './Cadastro/WCScreen';
import TreinoScreen from './Treinos/TreinosScreen';
import HomeFuncio from './TelaInicial/HomeFuncio';
import BuscarAluno from './Cadastro/BuscarAluno';

const Stack = createNativeStackNavigator();

const headerStyle = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#483D8B',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerStyle}>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeAluno"
          component={HomeAluno}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CadastroScreen"
          component={CadastroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FotoScreen"
          component={FotoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WCScreen"
          component={WCScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TreinoScreen"
          component={TreinoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeFuncio"
          component={HomeFuncio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BuscarAluno"
          component={BuscarAluno}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
