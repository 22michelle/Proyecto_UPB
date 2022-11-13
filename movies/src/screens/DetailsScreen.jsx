import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import MovieDetails from "../components/MovieDetails";
import { useMoviesDetails } from "../hooks/useMoviesDetails";


const screenHeight = Dimensions.get("screen").height;

export default function DetailsScreen({ route }) {
  const movie = route.params;
  const navigation = useNavigation();

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, Cast, movieFull } = useMoviesDetails(movie);

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={["#1F1C18", "#8E0E00"]} style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={styles.imageBorder}>
            <Image source={{ uri }} style={styles.image} />
          </View>
        </View>

        <View style={styles.marginContainer}>
          <Text style={styles.subtitle}>{movie.original_title}</Text>

          <Text style={styles.title}>{movie.title}</Text>
        </View>

        {isLoading ? (
          <ActivityIndicator color="red" size={60} />
        ) : (
          <MovieDetails movieFull={movieFull} cast={Cast} />
        )}

        {/* button volver al Home */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" color="white" size={60} />
        </TouchableOpacity>

        {/* footer */}
        <View style={styles.footer}>
          <Text style={styles.textF}>Copyright & 2022</Text>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "",
  },
  imageContainer: {
    width: "100%",
    height: screenHeight * 0.7,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    overflow: "hidden",
  },
  imageBorder: {
    flex: 1,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },

  image: {
    flex: 1,
  },

  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
    color: "white",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  backButton: {
    position: "absolute",
    top: 26,
    left: 5,
  },
  footer: {
    flex: 1,
    backgroundColor: "black",
    width: 800,
    marginTop: 100,
    height: 50,
    borderRadius: 2
  },
  textF: {
    color: "white",
    marginTop: 10,
  }
});
