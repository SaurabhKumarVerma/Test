import { StyleSheet, TouchableOpacity, View } from "react-native"
import React from "react"
import { color } from "../../theme/colors"
import GroceryIcon, { IconSetName } from "../../common/Icon"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { AppStackParamList } from "../../types/navigationParamType/AppStackParamType"
import TotalCartItem from "./TotalcartItem"

const ProductHeader = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>()

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goBack()} style={styles.navigationButton}>
        <GroceryIcon name="left" iconSetName={IconSetName.ANTDESIGNE} size={15} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.shoppingBag}>
        <TotalCartItem />
      </TouchableOpacity>
    </View>
  )
}

export default ProductHeader

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 48,
  },
  navigationButton: {
    alignItems: "center",
    backgroundColor: color.black1,
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    width: 40,
  },
  shoppingBag: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    position: "relative",
  },
})
