import { StyleSheet, View } from "react-native"
import React from "react"
import { GroceryText } from "../../common/GroceryText"
import { fonts } from "../../theme/typography"
import { color } from "../../theme/colors"
import GroceryRating from "../../common/GroceryRating"

interface IProductHeading {
  productTitle: string
  productCategory: string
  productRating: number
}
const ProductHeading = (props: IProductHeading) => {
  return (
    <View style={styles.container}>
      <View>
        <GroceryText text={props.productTitle || ""} numberOfLines={2} style={styles.textStyle} />
      </View>
      <View>
        <GroceryText text={props.productCategory || ""} numberOfLines={1} style={styles.textHeading} />
      </View>
      <GroceryRating rating={props.productRating} />
    </View>
  )
}

export default ProductHeading

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 22,
  },
  textHeading: {
    color: color.black90,
    fontFamily: fonts.manrope.bold,
    fontSize: 50,
    fontWeight: "800",
  },
  textStyle: {
    color: color.black90,
    fontFamily: fonts.manrope.light,
    fontSize: 50,
    fontWeight: "300",
  },
})
