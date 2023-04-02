import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const contacts = [
  {
    id: 1,
    name: 'Jessy The',
    image: require('../assets/1.jpg'),
  },
  {
    id: 2,
    name: 'Nazariy Dumanskyy',
    image: require('../assets/2.jpg'),
  },
  {
    id: 3,
    name: 'Rafeh Qazi',
    image: require('../assets/3.jpg'),
  },
  {
    id: 4,
    name: 'Dowayn Jonson',
    image: require('../assets/4.jpg'),
  }
]

function CantactsMenu() {
  return (
    <View style={styles.container}>
        <View style={styles.row}> 
          <View style={styles.starred}>
            <AntDesign name='star' size={30} color='#efefef' />
          </View>
          <Text style={styles.text}> Starred </Text>
        </View>

        {contacts.length !== 0 
        ? contacts.map((item,key)=>(
            <View style={styles.row} key={key}> 
              <Image source={item.image} style={styles.image} />
              <Text style={styles.text}> {item.name} </Text>
            </View>
          ))
        :
          <Text style={styles.nothing}> No Contacts ! </Text>
        }
    </View>
  )
}

export default CantactsMenu

const styles = StyleSheet.create({
  container: {

  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  starred: {
    backgroundColor: '#333333',
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    paddingLeft: 15,
    color: 'white',
    fontSize: 16,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
  nothing: {
    textAlign: 'center',
    color: '#858585',
    marginTop: 16,
  }
})
