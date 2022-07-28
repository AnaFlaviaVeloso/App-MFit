import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export default ({title, color='#F0EDE1', onPress}) => (
    <TouchableOpacity 
      onPress={onPress}
      style={[styles.button, {backgroundColor: color}]} 
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    height: 39,
    width: 216,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 3,
  },

  title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#F0EDE1',
    fontSize: 15
  }
})