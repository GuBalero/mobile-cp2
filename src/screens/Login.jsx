import React, { useState } from "react";
import {
    Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../components/Button";
import { useUser } from "../hooks/useUser";

export default function Login() {
  const { login } = useUser();
  const [inputText, setInputText] = useState("");

  function handleLogin(){
    if(inputText.trim().length === 0){
        alert('Erro!\nO seu nome não pode ser vazio.')
        return
    }
    login(inputText)
  }

  return (
    <View style={styles.view}>
      <Text style={styles.label}>Digite seu nome:</Text>
      <TextInput style={styles.input} onChangeText={setInputText} />
      <Button text="Logar" onPress={handleLogin} />
    </View>
  );
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
  },

  input: {
    borderRadius: 5,
    borderColor: "#E829F1",
    borderWidth: 2,
    backgroundColor: "#fff",
    padding: 10,
  },
});
