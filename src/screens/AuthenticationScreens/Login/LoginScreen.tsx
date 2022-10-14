import { StyleSheet, Text, View, ImageBackground, StatusBar, Image, TouchableOpacity, TextInput } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import React, { FC, useMemo } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import createStyles from './styles'
import { LOGINILLUSTRATION } from '../../../assets'
import { CustomTextInput } from '../../../components/CustomFormComponents/CustomTextInput'
import {CustomBtn} from '../../../components/CustomFormComponents/CustomBtn'
import Form from '../../../components/Forms/form'
import { validationSchema } from '../../../utilis/validation'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
interface IProps {
    navigation: NavigationProp<ParamListBase>
}

const LoginScreen:React.FC<IProps> = ({navigation}) => {
    const styles = useMemo(() => createStyles(), []);
    const initialValues = { 
        email: '',
        password: ''
    }
  return (
      <View style={styles.container} >
          <StatusBar
              animated={true}
              translucent={true}
              backgroundColor={'transparent'}
          />
          <LinearGradient colors={['#1A6B6B', '#A094E3']}
              start={{ x: 0.5, y: 0.5 }}
              end={{ x: 0.5, y: 1 }}
              style={styles.LinearGradient}
          >
            <KeyboardAwareScrollView  style={{flex: 1}}>
              <Image source={LOGINILLUSTRATION} style={styles.rocketIcon} />
              <Text style={styles.welcomeText}>Welcome back!</Text>
              <Text style={styles.loginText}>Please, Log In.</Text>
              <View style={styles.inputContainer}>
                  <Form initialValues={initialValues} validationSchema={validationSchema} onSubmit={() => { }} >    
                {console.log(initialValues)}
                  <CustomTextInput leftIcon="user" placeholder="email" name='email' />
                    <CustomTextInput leftIcon="lock" placeholder="Password" handlePasswordVisibility={() => { }} name="password" /> 
                  <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                  <CustomBtn title="Log In" onPress={() => { }} color="#19647E" />
              <Text style={styles.orText} >Or</Text>
              <View style={styles.CreatAccount}>
                  <CustomBtn title="Create an Account" onPress={() => { navigation.navigate('SignUpScreen') }} color="#A094E3" />
              </View>  
            </Form>
          </View>
            </KeyboardAwareScrollView>
          </LinearGradient>
      </View>
  )
}

export default LoginScreen;