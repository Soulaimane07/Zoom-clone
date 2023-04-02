import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const items = [
  {
    id: 1,
    name: "video-camera",
    title: "New Meeting",
    color: "#FF751F",
  },
  {
    id: 2,
    name: "plus-square",
    title: "Join",
  },
  {
    id: 3,
    name: "calendar",
    title: "Schedule",
  },
  {
    id: 4,
    name: "upload",
    title: "Share Screen",
  },
]

function MenuButtons({ navigation }) {

  const openMeeting = () => {
    navigation.navigate('Room')
  }

  return (
    <View style={styles.container}>
      {items.map((item, key)=>(
        <View style={styles.button} key={key}>
          <TouchableOpacity 
            onPress={()=>openMeeting()}
            style={{
              ...styles.buttonContainer,
              backgroundColor: item.color ? item.color : '#0470DC'
            }}
          >
            <FontAwesome name={item.name} size={23} color='#efefef' />
          </TouchableOpacity>
          <Text style={styles.buttonText}> {item.title} </Text>
        </View>
      ))}
    </View>
  )
}

export default MenuButtons

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingBottom: 10,
    borderBottomColor: '#1F1F1F',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    alignItems: 'center',
    flex: 1,
  },
  buttonContainer: {
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#858585',
    fontSize: 10,
    padding: 10,
    fontWeight: '600',
  }
})