import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { GroceryText } from "../../common/GroceryText"
import { fonts } from "../../theme/typography"
import { color } from "../../theme/colors"

interface IProductDescription {
  description: string | undefined
}

const ProductDescription = (props: IProductDescription) => {
  return (
    <View>
      <GroceryText text="Details" style={styles.heading} />
      <GroceryText text={props.description || ""} style={styles.detailDescription} />
    </View>
  )
}

export default ProductDescription

const styles = StyleSheet.create({
  detailDescription: {
    color: color.textColor1,
    fontFamily: fonts.manrope.light,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    marginBottom: 30,
  },
  heading: {
    color: color.textColor,
    fontFamily: fonts.manrope.regular,
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 24,
    marginBottom: 8,
  },
})
