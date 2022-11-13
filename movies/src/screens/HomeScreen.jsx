import {
  View,
  Text,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Carousel from "react-native-snap-carousel-v4";
import Movie from "../components/Movie";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HorizontalSlider from "../components/HorizontalSlider";
import { LinearGradient } from "expo-linear-gradient";
import { useMovies } from "../hooks/useMovies";
import { StatusBar } from "expo-status-bar";

const { width: windowWidth } = Dimensions.get("window");

export default function HomeScreen() {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();


  const { isLoading, películas } = useMovies();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="red" size={80} />
      </View>
    );
  }

  return (
    <ScrollView>
      <Text style={styles.container}>
        Home
      </Text>
      <LinearGradient colors={["#8E0E00", "#1F1C18"]}>
        <View style={{ marginTop: top + 10 }}>
          <View style={{ height: 440 }}>
            <Carousel
              data={películas.nowPlaying}
              renderItem={({ item }) => <Movie movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
            />
          </View>
          {/* Populares */}
          <HorizontalSlider movies={películas.popular} title="Popular"
          />
          {/* Top */}
          <HorizontalSlider movies={películas.topRated} title="TopRated" />
          {/* Upcoming */}
          <HorizontalSlider movies={películas.upcoming} title="Upcoming" />
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"

  },
  container: {
    flex: 1,
    justifyContent: "center",
    position: "fixed",
    fontStyle: "italic",
    fontWeight: "bold",
    color: "white",
    fontSize: 40,
    position: "relative",
    textAlign: "center",
    marginTop: 40,
    backgroundColor: "black"
  },
});
