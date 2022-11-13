import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SPACING } from "../config/spacing";
import { colors } from "../config/colors";

export default function PostScreen() {
  return (
    <View>
      <Text>PostScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 60,
  },
  title: {
    color: colors.white,
    fontSize: SPACING * 5,
    fontWeight: "700",
  },
  subtitle: {
    color: colors.light,
    marginTop: SPACING / 2,
  },
  button: {
    overflow: "hidden",
    borderRadius: 5,
    position: "absolute",
    right: 0,
  },
  gradient: {
    paddingHorizontal: SPACING,
    paddingVertical: SPACING / 3,
  },
});
