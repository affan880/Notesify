import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack/authStack';
import AppStack from './AppStack/appStack';
import { useAuthentication } from '../utilis/hooks/useAuthentication';
const Providers = () => {
  const { user } = useAuthentication();
  return user ? <AppStack/> : <AuthStack/>
}

export default Providers

