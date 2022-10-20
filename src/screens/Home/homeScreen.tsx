import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    }} >
      <StatusBar
        // animated={true}
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <Text>homeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})