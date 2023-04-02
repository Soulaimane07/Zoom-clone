import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

function StartMeeting({ name, setName, roomId, setRoomId, joinRoom}) {
  return (
    <View style={styles.startMeeting}> 
        <View style={styles.info}>
        <TextInput 
            style={styles.textInput} 
            placeholder='Enter name' 
            value={name} 
            placeholderTextColor='#767476'
            onChangeText={text => setName(text)}
        />
        </View>
        <View style={styles.info}>
        <TextInput 
            style={styles.textInput} 
            placeholder='Enter room Id' 
            value={roomId} 
            placeholderTextColor='#767476'
            onChangeText={text => setRoomId(text)}
        />
        </View>
        <View style={{ alignItems:'center' }}>
        <TouchableOpacity 
            onPress={()=> joinRoom()}
            style={styles.button}
        >
            <Text style={{ color:'white', fontWeight: 'bold' }}> Start Meeting </Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default StartMeeting

const styles = StyleSheet.create({
    info: {
      width: '100%',
      backgroundColor: '#373538',
      height: 50,
      borderTopWidth: 1,  
      borderBottomWidth: 1,  
      borderColor: '#484648',
      padding: 12,
      justifyContent: 'center',
    },
    textInput: {
      color: 'white',
      fontSize: 16,
    },
    button: {
      width: 350,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0470DC',
      height: 50,
      borderRadius: 10,
    }
    
})