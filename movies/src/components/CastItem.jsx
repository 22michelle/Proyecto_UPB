import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CastItem({ actor }) {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  console.log(actor)

  return (
    <View style={styles.container}>
      {actor.profile_path && <Image source={{ uri }} style={styles.image} />}
      <View style={styles.actorInfo}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{actor.name}</Text>
        <Text style={{
          fontSize: 16, opacity: 0.7
        }}>{actor.character}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    height: 70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
      color: "white",
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    marginLeft: 10,
    paddingRight: 15,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },

  actorInfo: {
    marginLeft: 10,
    marginTop: 2,
    marginBottom: 2
  },
});
