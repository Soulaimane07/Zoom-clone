import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'

function SearchBar() {
  return (
    <View style={styles.container}>
        <Fontisto name="search" size={16} color="#858585" />
        <Text style={styles.seachBar}> Search </Text>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
  },
  seachBar: {
    color: '#858585',
    paddingLeft: 10,
    fontSize: 16,
  }
})