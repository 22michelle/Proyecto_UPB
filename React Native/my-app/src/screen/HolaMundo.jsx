import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { setStatusBarBackgroundColor } from 'expo-status-bar'

export default function HolaMundo() {

console.log("Hola desde la consola")

  return (
    <View style={{BackgroundColor:"red"}}>
      <Text>HolaMundo</Text>
    </View>
  )
}

const styles = StyleSheet.create({})