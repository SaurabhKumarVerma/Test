/* eslint-disable react-native/no-color-literals */
import React from "react"
import { StatusBar } from "expo-status-bar"
import { SafeAreaView, StyleSheet, Text } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { MainNavigator } from "./app/app"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainNavigator />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
