import { FlatList, StyleSheet, View } from "react-native"
import React, { PropsWithChildren } from "react"
import CartHeader from "./CartHeader"
import { GroceryText } from "../../common/GroceryText"
import { fonts } from "../../theme/typography"
import GroceryButton from "../../common/GroceryButton"
import Checkout from "./Checkout"
import { inject, observer } from "mobx-react"
import { PropsWithStore } from "../../store/RootStore"
import ShoopingCartItem from "./ShoopingCartItem"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { AppStackParamList } from "../../types/navigationParamType/AppStackParamType"
import { ScreenName } from "../../types/ScreenName/ScreenName"
const ShoppingCart = (props: PropsWithStore<PropsWithChildren<object>>) => {
  const { CartStore } = props.rootStore
  const { navigate } = useNavigation<NativeStackNavigationProp<AppStackParamList>>()

  const renderShoppingCart = ({ item }) => {
    return <ShoopingCartItem cartItem={item} />
  }

  const navigateToHome = () => {
    navigate(ScreenName.HOME)
  }
  const renderEmptyList = () => {
    return (
      <View>
        <GroceryText text="Add Item To Cart" style={styles.emptyListMessageStyle} />
        <View style={{ alignSelf: "center", marginTop: 10 }}>
          <GroceryButton title="Home" block confirm onPress={navigateToHome} />
        </View>
      </View>
    )
  }

  const renderFooterComponent = () => {
    if (CartStore.cartItems.length) {
      return (
        <View style={{ marginTop: "90%" }}>
          <Checkout />
        </View>
      )
    } else {
      return null
    }
  }
  return (
    <View>
      <CartHeader />

      <FlatList
        data={CartStore.cartItems}
        keyExtractor={(item, id) => id.toString()}
        renderItem={renderShoppingCart}
        extraData={CartStore.cartItems}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyList}
        ListFooterComponent={renderFooterComponent}
        ListFooterComponentStyle={{ marginBottom: "50%" }}
      />
    </View>
  )
}

export default inject("rootStore")(observer(ShoppingCart))

const styles = StyleSheet.create({
  emptyListMessageStyle: {
    alignSelf: "center",
    fontFamily: fonts.manrope.bold,
    fontSize: 30,
    fontWeight: "800",
    letterSpacing: 2,
    marginTop: "50%",
    textAlign: "center",
  },
})
