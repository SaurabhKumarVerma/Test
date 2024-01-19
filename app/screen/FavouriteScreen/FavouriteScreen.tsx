import { StatusBar, View } from "react-native"
import React from "react"
import Favourite from "../../component/Favourite/Favourite"

const FavouriteScreen = () => {
  return (
    <View>
      <StatusBar hidden />
      <Favourite />
    </View>
  )
}

export default FavouriteScreen
