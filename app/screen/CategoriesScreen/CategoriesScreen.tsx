import { StatusBar, View } from "react-native"
import React from "react"
import Categories from "../../component/Categories/Categories"

const CategoriesScreen = () => {
  return (
    <View>
      <StatusBar hidden />
      <Categories />
    </View>
  )
}

export default CategoriesScreen
