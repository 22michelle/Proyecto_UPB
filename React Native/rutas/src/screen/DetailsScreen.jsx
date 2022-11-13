import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function DetailsScreen({ route }) {
  const navigation = useNavigation();
  const usuario = route.params;
  const { top } = useSafeAreaInsets();

  return (
    <SafeAreaView>
      <View style={{ top: top + 20 }}>
        <Text>DetailsScreen</Text>
        <Button title="volver" onPress={() => navigation.goBack()} />
        <Text>{JSON.stringify(usuario)}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
