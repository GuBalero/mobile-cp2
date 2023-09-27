import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Button({text, onPress}) {
  return (
    <TouchableOpacity 
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.button}
    >
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 5,
        backgroundColor: "#E829F1",
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    text:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 900,
    }
})