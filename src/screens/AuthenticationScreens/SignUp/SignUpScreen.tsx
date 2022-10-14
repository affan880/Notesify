import { StyleSheet, Text, View, SafeAreaView, ImageBackground, StatusBar, Image, ScrollView } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import React, { FC, useMemo } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SIGNUPILLUSTRATION } from '../../../assets'
import { CustomBtn } from '../../../components/CustomFormComponents/CustomBtn'
import { CustomTextInput } from '../../../components/CustomFormComponents/CustomTextInput'
import Form from '../../../components/Forms/form'
import { validationSchema } from '../../../utilis/validation'
import createStyles from './styles'
interface IProps {
    navigation: NavigationProp<ParamListBase>
}
const SignUpScreen: FC<IProps> = ({ navigation }) => {
    const styles = useMemo(() => createStyles(), []);

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
                    <Form validationSchema={validationSchema} initialValues={{ email: '', password: '', confirmPassword: '', username:'' }} onSubmit={() => { }} >
                    <CustomTextInput leftIcon="user" placeholder="Full Name" name='username' />
                    <CustomTextInput leftIcon="mail" placeholder="Email" name='email' />
                    <CustomTextInput leftIcon="lock" placeholder="Password" handlePasswordVisibility={() => { }} name="password" />
                        <CustomTextInput leftIcon="lock" placeholder="Confirm Password" handlePasswordVisibility={() => { }} name="confirmPassword" />
                            <View style={styles.SignupButton}>
                            <CustomBtn title="Sign Up" onPress={() => { }} color="#19647E" />
                            </View>
                                <Text style={styles.orText} >Or</Text>
                            <View style={styles.LoginButton}>
                        <CustomBtn title="Log In" onPress={() => { navigation.navigate('LoginScreen') }} color="#A094E3" />
                            </View>
                        </Form>
                </View>
            </ScrollView>
                </LinearGradient>
        </SafeAreaView>
    )
}

export default SignUpScreen;