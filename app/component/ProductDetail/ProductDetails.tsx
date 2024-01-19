import { ScrollView, StyleSheet, View } from "react-native"
import React, { PropsWithChildren } from "react"
import ProductHeader from "./ProductHeader"
import ProductHeading from "./ProductHeading"
import GroceryCarousel from "../../common/GroceryCarousel"
import OfferTag from "../../common/OfferTag"
import PriceTag from "../../common/PriceTag"
import GroceryButton from "../../common/GroceryButton"
import ProductDescription from "./ProductDescription"
import { inject, observer } from "mobx-react"
import { PropsWithStore } from "../../store/RootStore"
import { IProduct } from "../../types/productList.interface"

interface IProductDetails {
  item: IProduct
}

const ProductDetails = (props: PropsWithStore<PropsWithChildren<IProductDetails>>) => {
  const { CartStore } = props.rootStore

  const addToCart = () => {
    CartStore.addToCart(props.item)
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ProductHeader />
      <ProductHeading
        productTitle={props.item?.title}
        productCategory={props.item?.category}
        productRating={props.item?.rating}
      />
      {props.item?.images ? <GroceryCarousel imageSet={props.item?.images} /> : null}

      <View style={styles.priceContainer}>
        <View style={styles.price}>
          <PriceTag price={props.item?.price || 0} />
        </View>
        <OfferTag offer={props.item?.discountPercentage || 0} />
      </View>

      <View style={styles.buttonContainer}>
        <GroceryButton title="Add To Cart" block onPress={addToCart} />
        <GroceryButton title="Buy Now" block confirm />
      </View>
      <View style={styles.descriptionContainer}>
        <ProductDescription description={props.item?.description} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
  descriptionContainer: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  price: {
    marginRight: 14,
  },
  priceContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 26,
  },
})

export default inject("rootStore")(observer(ProductDetails))
