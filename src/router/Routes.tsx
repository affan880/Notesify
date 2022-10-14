import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppStack from './AppStack/appStack'
import AuthStack from './AuthStack/authStack'
import { NavigationContainer } from '@react-navigation/native'
const Routes = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})