import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Alert, SafeAreaView, TouchableOpacity } from 'react-native'
import StartMeeting from '../components/StartMeeting'
import { io } from 'socket.io-client'
import { Camera, CameraType } from 'expo-camera';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

let socket

const menuIcons = [
  {
    name: 'microphone',
    title: 'Mute',
    color: '#efefef'
  },
  {
    name: 'video-camera',
    title: 'Stop Camera',
  },
  {
    name: 'group',
    title: 'Participants',
  },
  {
    name: 'upload',
    title: 'Share',
  }
]

function MeetingRoom() {
  const [name, setName] = useState()
  const [roomId, setRoomId] = useState()
  const [activeUsers, setActiveUsers] = useState([])
  const [startCamera, setStartCamera] = useState(false)

  const startCam = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === 'granted'){
      setStartCamera(true)
    } else {
      Alert.alert('Access denied')
    }
  }

  const joinRoom = () => {
    startCam()
    socket.emit('join-room', { roomId: roomId, userName: name })
  }

  useEffect(()=>{
    socket = io('https://35ba-105-67-6-187.eu.ngrok.io')
    console.log('I am connected');
    socket.on('connection', ()=> console.log('connected'))
    socket.on('all-users', users => {
      console.log('Active Users');
      console.log(users);
      users = users.filter(user => (user.userName != name))
      setActiveUsers(users)
    })
  }, [])

  return (
    <View style={styles.container}>
      {startCamera 
      ? (
        <SafeAreaView  style={{ flex: 1 }}>
          <View style={styles.activeUsers}>
            <View style={styles.camera}>
              <Camera type={"front"} style={{ 
                width: activeUsers.length <= 1 ? '100%' : 180, 
                height: activeUsers.length <= 1 ? 550 : 260,
              }}>
              </Camera>
              {activeUsers.filter(user => (user.userName != name)).map((user,key)=>(
                <View key={key} style={styles.activeUser}>
                  <Text style={{ color: 'white' }}> {user.userName} </Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.menu}>
            {menuIcons.map((item,key)=>(
              <TouchableOpacity key={key} style={styles.tile}>
                <FontAwesome name={item.name} size={24} color='#efefef' />
                <Text style={styles.textTitle}> {item.title} </Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
        )
      :
        <StartMeeting 
          name={name} 
          setName={setName} 
          roomId={roomId} 
          setRoomId={setRoomId} 
          joinRoom={joinRoom}
        />
      }
    </View>
  )
}

export default MeetingRoom

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1c',
    flex: 1,
  },
  camera: {
    backgroundColor: 'black',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    borderRadius: 10,
  },
  menu: {
    backgroundColor: '',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tile: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 15,
  },
  textTitle: {
    color: 'white',
    marginTop: 6,
  },
  
  activeUsers: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  activeUser: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 180,
    height: 260,
    justifyContent: 'center',
    alignItems: 'center', 
  },
})