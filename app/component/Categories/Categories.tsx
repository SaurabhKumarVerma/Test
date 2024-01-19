import { StyleSheet, Text, View } from "react-native"
import React from "react"

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }}>Categories</Text>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
})
