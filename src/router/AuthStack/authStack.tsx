import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OnBoardingScreen from '../../screens/OnBoardingScreen/OnBoardingScreen';
import LoginScreen from '../../screens/AuthenticationScreens/Login/LoginScreen';
import SignUpScreen from '../../screens/AuthenticationScreens/SignUp/SignUpScreen';
type AuthStackParamList = {
  OnBoardingScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
};
const authStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="OnBoardingScreen" screenOptions={{
      headerShown: false,
      animationEnabled: false
    }}> 
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false}} />
      </Stack.Navigator>
  )
}

export default authStack

const styles = StyleSheet.create({})