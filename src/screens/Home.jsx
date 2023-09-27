import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useUser } from "../hooks/useUser";
import Button from '../components/Button';

export default function Home() {
  const {user, logout} = useUser()

  return (
    <View style={styles.view}>
        <Text style={styles.label}>Olá {user}!</Text>
        <Button text="Deslogar" onPress={logout}/>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ddd",
    padding: 20,
    gap: 10,
  },

  label: {
    color: "#555",
    fontSize: 16,
    fontWeight: 700,
    textAlign: 'center'
  },
})