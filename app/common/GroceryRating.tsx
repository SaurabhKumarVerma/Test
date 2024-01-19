import { StyleSheet, View } from "react-native"
import React from "react"
import { StarRatingDisplay } from "react-native-star-rating-widget"
import { color } from "../theme/colors"
import { GroceryText } from "./GroceryText"
import { fonts } from "../theme/typography"

interface IGroceryRating {
  rating: number
}
const GroceryRating = (props: IGroceryRating) => {
  return (
    <View style={styles.container}>
      <StarRatingDisplay
        rating={props.rating || 0}
        color={color.darkYellow}
        starSize={20}
        emptyColor={color.black100}
      />
      <View>
        <GroceryText text="110 Reviews" style={styles.reviewStyle} />
      </View>
    </View>
  )
}

export default GroceryRating

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 8,
  },
  reviewStyle: {
    color: color.lightGrey1,
    fontFamily: fonts.manrope.light,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
  },
})
