import { StyleSheet, View } from "react-native"
import React from "react"
import { GroceryText } from "./GroceryText"
import { color } from "../theme/colors"
import { fonts } from "../theme/typography"

interface IOfferTag {
  offer: number
}

const OfferTag = (props: IOfferTag) => {
  return (
    <View style={styles.container}>
      <GroceryText text={`$ ${props.offer} OFF`} style={styles.textStyle} />
    </View>
  )
}

export default OfferTag

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.lightBlue,
    borderRadius: 12,
    width: 90,
  },
  textStyle: {
    color: color.white1,
    fontFamily: fonts.manrope.medium,
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0.24,
    lineHeight: 16,
    paddingHorizontal: 10,
    padding: 4,
    textAlign: "center",
  },
})
