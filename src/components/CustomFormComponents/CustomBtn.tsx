import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from 'react-native-reanimated'

type Props = {
    title: string,
    onPress: () => void,
    color?: string,
}

export const CustomBtn = ({title, onPress, color}: Props) => {
    return (
        <TouchableOpacity style={[styles.button,{backgroundColor : color}]} onPress = {onPress} >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
  )
}

export default CustomBtn

const styles = StyleSheet.create({
    button: {
        width: 342,
        height: 60,
        borderRadius: 20,
        elevation: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontWeight: '900',
        fontSize: 16,
        color: '#fff',
        lineHeight: 37,
    }
})