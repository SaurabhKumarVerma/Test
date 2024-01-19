import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native"
import React, { PropsWithChildren } from "react"
import GroceryIcon, { IconSetName } from "./Icon"
import GroceryImage from "./GroceryImage"
import { images } from "../../assets/images"
import { color } from "../theme/colors"
import { GroceryText } from "./GroceryText"
import { fonts } from "../theme/typography"
import { FrontSize } from "../theme/size"
import { IProduct } from "../types/productList.interface"
import { inject, observer } from "mobx-react"
import { PropsWithStore } from "../store/RootStore"
import LikeButton from "./LikeButton"
import { useNavigation } from "@react-navigation/native"
import { ScreenName } from "../types/ScreenName/ScreenName"
import { AppStackParamList } from "../types/navigationParamType/AppStackParamType"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

interface IRecommendedCard {
  productList: IProduct
  isAddedToFav?: boolean
}

const RecommendedCard = (props: PropsWithStore<PropsWithChildren<IRecommendedCard>>) => {
  const { CartStore } = props.rootStore
  const productImage = props.productList.thumbnail ?? images.noProductImageFound

  const { navigate } = useNavigation<NativeStackNavigationProp<AppStackParamList>>()

  const navigateToProductDetails = () => {
    navigate(ScreenName.PRODUCT_DETAIL, {
      productItem: props.productList.id,
    })
  }

  return (
    <TouchableOpacity onPress={navigateToProductDetails} style={styles.container}>
      <View style={styles.favoritesContainer}>
        {!props.isAddedToFav ? <LikeButton addToFav={props.productList} /> : null}
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.imageView}>
          <GroceryImage
            source={{ uri: productImage }}
            resizeMode="stretch"
            width={68}
            style={styles.imageHeight}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <GroceryText
            text={props?.productList.price as unknown as string}
            style={styles.productPrice}
          />
          <GroceryText
            numberOfLines={1}
            text={props?.productList.brand}
            style={styles.productName}
          />
        </View>
        <TouchableOpacity onPress={() => CartStore.addToCart(props.productList)}>
          <GroceryIcon
            name="circle-with-plus"
            iconSetName={IconSetName.ENTYPO}
            size={26}
            color={color.lightBlue}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
export default inject("rootStore")(observer(RecommendedCard))

const styles = StyleSheet.create({
  bottomContainer: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 14,
    marginTop: 16,
  },
  container: {
    backgroundColor: color.lightGrey,
    borderRadius: 12,
    height: 194,
    marginRight: 14,
    width: 160,
  },
  favoritesContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: 14,
  },
  imageContainer: {
    alignSelf: "center",
    flexDirection: "row",
  },
  imageHeight: {
    borderRadius: 4,
    flexShrink: 0,
    height: 68,
  },
  imageView: {
    alignSelf: "center",
    marginTop: 0,
  },
  productName: {
    fontFamily: fonts.manrope.regular,
    fontSize: FrontSize.label.label1,
    fontWeight: "400",
    letterSpacing: 0.24,
    lineHeight: 16,
  },
  productPrice: {
    color: color.textColor,
    fontFamily: fonts.manrope.bold,
    fontSize: FrontSize.body.body2,
    fontWeight: "600",
    lineHeight: 20,
  },
})
