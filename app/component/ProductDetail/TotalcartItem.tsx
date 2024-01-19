import { StyleSheet, TouchableOpacity, View } from "react-native"
import React, { PropsWithChildren } from "react"
import { color } from "../../theme/colors"
import GroceryIcon, { IconSetName } from "../../common/Icon"
import { GroceryText } from "../../common/GroceryText"
import { fonts } from "../../theme/typography"
import { PropsWithStore } from "../../store/RootStore"
import { observer } from "mobx-react-lite"
import { inject } from "mobx-react"
import { useNavigation } from "@react-navigation/core"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { AppStackParamList } from "../../types/navigationParamType/AppStackParamType"

const TotalCartItem = (props: PropsWithStore<PropsWithChildren<object>>) => {
  const { navigate } = useNavigation<NativeStackNavigationProp<AppStackParamList>>()
  const { CartStore } = props.rootStore
  return (
    <TouchableOpacity onPress={() => navigate("ShoppingCart")} style={styles.container}>
      <View>
        <View style={styles.iconContainer}>
          <GroceryIcon
            name="handbag"
            iconSetName={IconSetName.SIMPLELINEICONS}
            size={26}
            style={styles.iconStyle}
          />
          {CartStore.total > 0 ? (
            <View style={styles.cartTextContainer}>
              <GroceryText style={styles.cartTextStyle} text={`${CartStore.cartItems.length}`} />
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default inject("rootStore")(observer(TotalCartItem))

const styles = StyleSheet.create({
  cartTextContainer: {
    alignItems: "center",
    backgroundColor: color.darkYellow,
    borderRadius: 12,
    bottom: 12,
    height: 24,
    justifyContent: "center",
    left: 12,
    position: "absolute",
    width: 24,
  },
  cartTextStyle: {
    alignItems: "center",
    color: color.white,
    fontFamily: fonts.manrope.semiBold,
    fontSize: 14,
    fontWeight: "600",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  iconStyle: {
    position: "relative",
  },
})
