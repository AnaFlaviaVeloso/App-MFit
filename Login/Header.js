import React from 'react'

import {View, Text, Image, StyleSheet} from 'react-native'

export default () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Queima Bacon</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10
  },
  title: {
    fontSize: 26,
    fontFamily: '',
    fontWeight: 'bold',
    color: 'white'
  },  
})