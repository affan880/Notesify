import { StyleSheet, Text, View, SafeAreaView, ImageBackground, StatusBar, Image, ScrollView } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import React, { FC, useMemo, useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SIGNUPILLUSTRATION } from '../../../assets'
import { CustomBtn, NavBtn } from '../../../components/CustomFormComponents/CustomBtn'
import { CustomTextInput } from '../../../components/CustomFormComponents/CustomTextInput'
import Form from '../../../components/Forms/form'
import { validationSchema } from '../../../utilis/validation'
import createStyles from './styles'
import { createUser } from '../../../Modules/auth/firebase/firebase'

interface IProps {
    navigation: NavigationProp<ParamListBase>
}
const SignUpScreen: FC<IProps> = ({ navigation }) => {
    const styles = useMemo(() => createStyles(), []);

    const initialValues = {
        username:'',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const onSubmit = (email: string, password: string) => {
        // console.log(email, password)
        const verificatonSent :any = createUser(email, password);
        if (verificatonSent) {
            navigation.navigate('VerificationScreen');
        }
        else {
            console.log('error')
        }
    }

    return (
           
        <SafeAreaView style={[styles.container, {flex:1}]} >
            <StatusBar
                animated={true}
                translucent={true}
                backgroundColor={'transparent'}
            />
           
            <LinearGradient colors={['#03202B', '#A094E3']}
                start={{ x: 0.5, y: 0.5 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.LinearGradient}
            >
                <ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={{ flexGrow: 1 }}
                    scrollEnabled={true}
                >
                <Image source={SIGNUPILLUSTRATION} style={styles.rocketIcon} />
                <Text style={styles.welcomeText}> Hi there!</Text>
                <Text style={styles.loginText}>Let's Get Started</Text>
                <View style={styles.inputContainer}>
                    <Form validationSchema={validationSchema} initialValues={initialValues} onSubmit={(values) => { onSubmit(values.email, values.password) }} >
                        <CustomTextInput leftIcon="user" placeholder="Full Name" name='username' />
                        <CustomTextInput leftIcon="mail" placeholder="Email" name='email' />
                        <CustomTextInput leftIcon="lock" placeholder="Password" name="password" />
                        <CustomTextInput leftIcon="lock" placeholder="Confirm Password" handlePasswordVisibility name="confirmPassword" />
                        <View style={styles.SignupButton}>
                            <CustomBtn title="Sign Up" color="#19647E" />
                        </View>
                        <Text style={styles.orText} >Or</Text>
                        <View style={styles.LoginButton}>
                            <NavBtn title="Log In" onPress={() => { navigation.navigate('LoginScreen') }} color="#A094E3" />
                        </View>
                    </Form>
                </View>
            </ScrollView>
                </LinearGradient>
        </SafeAreaView>
    )
}

export default SignUpScreen;