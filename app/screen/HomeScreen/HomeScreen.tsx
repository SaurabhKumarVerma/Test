import React from "react"
import { StatusBar, View } from "react-native"
import Home from "../../component/Home/Home"

export default function HomeScreen() {
  return (
    <View>
      <StatusBar hidden />
      <Home />
    </View>
  )
}
