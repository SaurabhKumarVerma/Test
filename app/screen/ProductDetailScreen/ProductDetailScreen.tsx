import { View, ActivityIndicator } from "react-native"
import React, { PropsWithChildren, useEffect } from "react"
import ProductDetails from "../../component/ProductDetail/ProductDetails"
import { inject, observer } from "mobx-react"
import { PropsWithStore } from "../../store/RootStore"
import { color } from "../../theme/colors"

const ProductDetailScreen = (props: PropsWithStore<PropsWithChildren<object>>) => {
  const { allProduct } = props.rootStore
  useEffect(() => {
    allProduct.getProductDetails(props.route.params?.productItem)
  }, [])

  return (
    <View>
      {allProduct.isProductDetailLoading ? (
        <ActivityIndicator color={color.darkYellow} size={"large"} />
      ) : (
        <ProductDetails item={allProduct.productDetails} />
      )}
    </View>
  )
}

export default inject("rootStore")(observer(ProductDetailScreen))
