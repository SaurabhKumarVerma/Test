import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { PropsWithChildren } from "react"
import GroceryImage from "../../common/GroceryImage"
import { GroceryText } from "../../common/GroceryText"
import GroceryIcon, { IconSetName } from "../../common/Icon"
import { inject, observer } from "mobx-react"
import { PropsWithStore } from "../../store/RootStore"
import { color } from "../../theme/colors"
import { fonts } from "../../theme/typography"
import { images } from "../../../assets/images"
import { IProduct } from "../../types/productList.interface"

interface IShoopingCartItem {
  cartItem: IProduct
}
const ShoopingCartItem = (props: PropsWithStore<PropsWithChildren<IShoopingCartItem>>) => {
  const { CartStore } = props.rootStore
  const defaultImage = props.cartItem.thumbnail ?? images.noProductImageFound
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.productInfoContainer}>
          <View style={styles.direaction}>
            <View style={styles.imageContainer}>
              <GroceryImage width={26} source={{ uri: defaultImage }} style={styles.imageStyle} />
            </View>
            <View>
              <GroceryText
                text={props.cartItem.title}
                numberOfLines={1}
                style={styles.titleTextStyle}
              />
              <GroceryText text={`$ ${props.cartItem.price}`} style={styles.priceTextStyle} />
            </View>
          </View>

          <View style={styles.direaction}>
            <TouchableOpacity
              onPress={() => CartStore.decreaseQuantityInCart(props.cartItem.id)}
              style={styles.toggleContainer}
            >
              <GroceryIcon name="minus" iconSetName={IconSetName.ANTDESIGNE} />
            </TouchableOpacity>

            <View style={styles.quantityContainer}>
              <GroceryText text={props.cartItem.quantity as unknown as string} />
            </View>

            <TouchableOpacity
              onPress={() => CartStore.increaseQuantityInCart(props.cartItem.id)}
              style={styles.toggleContainer}
            >
              <GroceryIcon name="plus" iconSetName={IconSetName.ANTDESIGNE} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default inject("rootStore")(observer(ShoopingCartItem))

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  direaction: {
    flexDirection: "row",
  },
  imageContainer: {
    marginRight: 26,
  },
  imageStyle: {
    height: 26,
    marginTop: 8,
  },
  priceTextStyle: {
    color: color.textColor,
    fontFamily: fonts.manrope.regular,
    fontSize: 14,
    fontWeight: "400",
    marginTop: 4,
  },
  productInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 28,
  },
  quantityContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 14,
  },

  titleTextStyle: {
    color: color.textColor,
    fontFamily: fonts.manrope.semiBold,
    fontSize: 14,
    fontWeight: "500",
  },
  toggleContainer: {
    alignItems: "center",
    backgroundColor: color.lightGrey,
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    width: 40,
  },
})
