import { Button, StyleSheet, Text, View } from "react-native";
import React, {useEffect} from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function HomeScreen() {
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log(isFocused);
  }, [isFocused])
  

  const usuario = {
    id: "123",
    nombre: "Michelle",
    apellido: "Mejía Parra",
    edad: 18,
  };

  return (
    <SafeAreaView>
      <View style={{top: top + 20}}>
        <Text>HomeScreen</Text>
        <Button
          title="Ir a detalles"
          onPress={() => navigation.navigate("DetailsScreen", usuario)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});