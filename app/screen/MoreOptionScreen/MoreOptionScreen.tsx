import { StatusBar, Text, View, StyleSheet } from "react-native"
import React from "react"

const MoreOptionScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={{ textAlign: "center" }}>MoreOptionScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
})

export default MoreOptionScreen
