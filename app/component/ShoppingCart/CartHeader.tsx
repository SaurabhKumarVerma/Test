import { StyleSheet, TouchableOpacity, View } from "react-native"
import React, { PropsWithChildren } from "react"
import GroceryIcon, { IconSetName } from "../../common/Icon"
import { useNavigation } from "@react-navigation/core"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { AppStackParamList } from "../../types/navigationParamType/AppStackParamType"
import { color } from "../../theme/colors"
import { GroceryText } from "../../common/GroceryText"
import { fonts } from "../../theme/typography"
import { inject, observer } from "mobx-react"
import { PropsWithStore } from "../../store/RootStore"

const CartHeader = (props: PropsWithStore<PropsWithChildren<object>>) => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>()
  const { CartStore } = props.rootStore
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
        {CartStore.cartItems.length ? (
          <GroceryText
            text={` (${CartStore.cartItems.length as unknown as string})`}
            style={[styles.textStyle, { marginLeft: 5 }]}
          />
        ) : null}
      </View>
    </View>
  )
}

export default inject("rootStore")(observer(CartHeader))

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
    flexDirection: "row",
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
