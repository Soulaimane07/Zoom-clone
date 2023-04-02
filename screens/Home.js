import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import MenuButtons from '../components/MenuButtons'
import CantactsMenu from '../components/CantactsMenu'

function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaView}>
            <Header />
            <SearchBar />
            <MenuButtons navigation={navigation} />
            <CantactsMenu />
        </SafeAreaView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c1c1c',
        padding: 15,
        // flex: 1,
    },
    safeAreaView: {
        height: '100%',
    }
})