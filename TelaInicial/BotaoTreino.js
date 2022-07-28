import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export default ({title, color='#cacfd9', onPress}) => (
    <TouchableOpacity 
      onPress={onPress}
      style={[styles.button, {backgroundColor: color}]} 
    >
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
    text : {
    fontWeight: 'bold',
    color: '#1A1D22',
    fontSize: 48
  }
})