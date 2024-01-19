import { Platform, StyleSheet, View } from "react-native"
import React from "react"
import { color } from "../theme/colors"
import GroceryImage from "./GroceryImage"
import { images } from "../../assets/images"
import { Source } from "react-native-fast-image"
import { GroceryText } from "./GroceryText"
import { fonts } from "../theme/typography"
import { FrontSize } from "../theme/size"
import IOffer from "../types/OfferDataType"

interface IGroceryCard {
  offerItem: IOffer
}

const GroceryCard = (props: IGroceryCard) => {
  const imageUrl = props.offerItem.imageUrl ? props.offerItem.imageUrl : images.noProductImageFound
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <GroceryImage width={68} source={imageUrl as Source} style={styles.imageHeight} />
      </View>
      <View style={styles.textContainer}>
        <GroceryText text={props.offerItem.text1} style={styles.bannerText} />
        <GroceryText text={props.offerItem.discount} style={styles.offerText} />
        <GroceryText text={props.offerItem.offerApplicable} style={styles.orderText} />
      </View>
    </View>
  )
}

export default GroceryCard

const styles = StyleSheet.create({
  bannerText: {
    color: color.white,
    fontFamily: fonts.manrope.light,
    fontSize: FrontSize.heading.heading3,
    fontWeight: "300",
  },
  container: {
    backgroundColor: color.darkYellow,
    borderRadius: 16,
    flexDirection: "row",
    flexShrink: 0,
    marginRight: 20,
  },
  imageContainer: {
    marginLeft: 22,
    marginVertical: 30,
  },
  imageHeight: {
    aspectRatio: 1,
  },
  offerText: {
    color: color.white,
    fontFamily: fonts.manrope.bold,
    fontSize: FrontSize.heading.heading2,
    fontWeight: "800",
    marginRight: 21,
  },
  orderText: {
    color: color.white,
    fontFamily: fonts.manrope.light,
    fontWeight: "300",
    paddingBottom: 4,
  },
  textContainer: {
    marginLeft: 44,
    paddingRight: 30,
    paddingVertical: 20,
  },
})
