import { StyleSheet, View } from "react-native"
import React from "react"
import { GroceryText } from "./GroceryText"
import { fonts } from "../theme/typography"
import { color } from "../theme/colors"

interface IPriceTag {
  price: number
}

const PriceTag = (props: IPriceTag) => {
  const price = props.price ?? 0
  return (
    <View>
      <GroceryText text={`$ ${price}`} style={styles.priceStyle} />
    </View>
  )
}

export default PriceTag

const styles = StyleSheet.create({
  priceStyle: {
    color: color.darkBlue,
    fontFamily: fonts.manrope.semiBold,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
  },
})
