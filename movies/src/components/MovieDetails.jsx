import { Button, FlatList, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import currencyFormatter from "currency-formatter";
import CastItem from "./CastItem";

export default function MovieDetails({ movieFull, cast }) {


  const abrir = async () => {
    const supported = await Linking.canOpenURL("https://www.youtube.com/watch?v=U6AL4vu2ppw")
    if (supported) {
      return Linking.openURL("https://www.youtube.com/watch?v=U6AL4vu2ppw");
    } else {
      return Linking.openURL('https://www.youtube.com/watch?v=U6AL4vu2ppw');
    }
  }

  return (
    <>
      {/* Detalles */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="star-outline"
            size={30}
            color="white"
            style={{ marginRight: 5 }}
          />

          {/* Puntuación */}
          <Text style={{ marginTop: 5, color: "white", fontSize: 18 }}>
            {movieFull.vote_average}
          </Text>

          {/* Generos */}
          <Text
            style={{
              marginLeft: 5,
              marginTop: 5,
              color: "white",
              fontSize: 18,
            }}
          >
            —{movieFull.genres.map((g) => g.name).join(",  ")}
          </Text>
        </View>

        {/* Descripcion */}
        <Text
          style={{
            marginLeft: 5,
            marginTop: 10,
            color: "white",
            fontSize: 23,
            fontWeight: "bold",
          }}
        >
          Descripción
        </Text>

        <Text
          style={{
            color: "white",
            fontSize: 16,
          }}
        >
          {movieFull.overview}
        </Text>

        {/* Presupuesto */}
        <Text
          style={{
            marginLeft: 5,
            marginTop: 10,
            color: "white",
            fontSize: 23,
            fontWeight: "bold",
          }}
        >
          Presupuesto
        </Text>
        <Text style={{ color: "white", fontSize: 20 }}>
          {currencyFormatter.format(movieFull.budget, {
            code: "USD",
          })}
        </Text>

        {/* Casting */}
        <View style={{ marginTop: 10, marginBottom: 100 }}>
          <Text style={{ color: "white", fontSize: 23, fontWeight: "bold" }}>
            Actores
          </Text>

          <FlatList
            data={cast}
            renderItem={({ item }) => <CastItem actor={item} />}
            keyExtractor={(item) => item.id.toString()}
            style={{ marginTop: 10, height: 70 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />


          {/* button */}
          <TouchableOpacity onPress={() => abrir()}>
            <Ionicons name="logo-youtube" color="white" size={60} style={{ marginTop: 20, }} />
            <Text style={{ color: "white", fontWeight: "bold" }} >TRÁILER</Text>
          </TouchableOpacity>



        </View>

      </View>

    
    </>
  );
}

const styles = StyleSheet.create({

});
