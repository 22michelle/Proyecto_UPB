import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Movies({ movie, height = 420, width = 300 }) {
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const navigation = useNavigation();



    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("DetailsScreen", movie)}
            style={{
                width,
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7,
            }}
        >
            <View style={styles.imgContainer}>
                <Image source={{ uri }} style={styles.image} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },

    imgContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
});