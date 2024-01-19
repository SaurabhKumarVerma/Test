import { StyleSheet, View } from "react-native"
import React, { PropsWithChildren } from "react"
import { GroceryText } from "../../common/GroceryText"
import GroceryButton from "../../common/GroceryButton"
import { color } from "../../theme/colors"
import { fonts } from "../../theme/typography"
import { PropsWithStore } from "../../store/RootStore"
import { inject, observer } from "mobx-react"

const Checkout = (props: PropsWithStore<PropsWithChildren<object>>) => {
  const { CartStore } = props.rootStore
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.subtotalContainer}>
        <GroceryText text="Subtotal" style={styles.text} />
        <GroceryText text={`$ ${CartStore.total}`} style={styles.textDetail} />
      </View>
      <View style={styles.total}>
        <GroceryText text="Delivery" style={styles.text} />
        <GroceryText text="$2" style={styles.textDetail} />
      </View>
      <View style={styles.total}>
        <GroceryText text="Total" style={styles.text} />
        <GroceryText
          text={`$ ${CartStore.total + CartStore.delivery ?? 0}`}
          style={styles.textDetail}
        />
      </View>
      <View style={{ paddingHorizontal: 18, marginTop: 34 }}>
        <GroceryButton title="Proceed  To checkout" confirm />
      </View>
    </View>
  )
}

export default inject("rootStore")(observer(Checkout))

const styles = StyleSheet.create({
  bottomContainer: {
    backgroundColor: color.black1,
    paddingHorizontal: 30,
  },
  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },
  text: {
    color: color.textColor1,
    fontFamily: fonts.manrope.regular,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
  },
  textDetail: {
    color: color.textColor,
    fontFamily: fonts.manrope.regular,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
  },
})
