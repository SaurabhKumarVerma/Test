import { StyleSheet, View, TouchableOpacity } from "react-native"
import React from "react"
import GroceryIcon, { IconSetName } from "../../common/Icon"
import { GroceryText } from "../../common/GroceryText"
import { useNavigation } from "@react-navigation/core"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { AppStackParamList } from "../../types/navigationParamType/AppStackParamType"
import { color } from "../../theme/colors"
import { fonts } from "../../theme/typography"

const FavouriteHeader = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>()

  const goBack = () => {
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goBack()} style={styles.navigationButton}>
        <GroceryIcon name="left" iconSetName={IconSetName.ANTDESIGNE} size={15} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <GroceryText text="Shopping Cart" style={styles.textStyle} />
      </View>
    </View>
  )
}

export default FavouriteHeader

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 24,
    marginTop: 45,
  },
  navigationButton: {
    alignItems: "center",
    backgroundColor: color.black1,
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    width: 40,
  },
  textContainer: {
    marginLeft: 22,
  },
  textStyle: {
    color: color.textColor,
    fontFamily: fonts.manrope.regular,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
})
