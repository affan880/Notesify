import { View, Text } from 'react-native'
import React from 'react'
import Routes from './Routes'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack/authStack'
const Providers = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  )
}

export default Providers

