import { StatusBar, View } from "react-native"
import React from "react"
import ShoppingCart from "../../component/ShoppingCart/ShoppingCart"

const ShoppingCartScreen = () => {
  return (
    <View>
      <StatusBar hidden />
      <ShoppingCart />
    </View>
  )
}

export default ShoppingCartScreen
