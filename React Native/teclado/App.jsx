import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function App() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (value, field) => {
    setUserInfo({ ...userInfo, [field]: value });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={{ fontSize: 20 }}>
            Hola, esta es una prueba del teclado en ios y android
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Ingrese un Email"
            value="user@gmail.com"
            autoComplete="off"
            autoCapitalize="none"
            onChange={(value) => handleChange(value, "email")}
          />
          <TextInput
            style={styles.input}
            placeholder="Ingrese un password"
            secureTextEntry={true}
            onChange={(value) => handleChange(value, "password")}
          />

          <View>
            <Button title="Enviar" onPress={() => console.log(userInfo)} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
    // backgroundColor: "#8E2DE2"
  },
  input: {
    borderBottomColor: "red",
    borderBottomWidth: 2,
    margin: 16,
    padding: 8,
    fontSize: 18,
  },
});
