import { FlatList, View } from "react-native"
import React from "react"
import { data } from "./offerProductData"
import GroceryCard from "../../common/GroceryCard"

const ProductOffer = () => {
  const renderItem = ({ item }) => {
    return <GroceryCard offerItem={item} />
  }
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, id) => id.toString()}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default ProductOffer
