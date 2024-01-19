import { FlatList, View, StyleSheet, ActivityIndicator } from "react-native"
import React, { PropsWithChildren } from "react"
import { PropsWithStore } from "../../store/RootStore"
import { inject, observer } from "mobx-react"
import RecommendedCard from "../../common/RecommendedCard"
import { GroceryText } from "../../common/GroceryText"
import { fonts } from "../../theme/typography"
import HomeHeader from "./HomeHeader"
import ProductOffer from "./ProductOffer"
import { color } from "../../theme/colors"

const Recommendation = (props: PropsWithStore<PropsWithChildren<object>>) => {
  const { allProduct } = props.rootStore

  const renderItem = ({ item }) => {
    return (
      <View style={styles.recommendationContainerStyle}>
        <RecommendedCard productList={item} />
      </View>
    )
  }

  const renderHeader = () => {
    return (
      <>
        <HomeHeader />
        <View style={styles.productOfferStyle}>
          <ProductOffer />
        </View>
        <View style={styles.recommendationSection}>
          <GroceryText text="Recommended" style={styles.textStyle} />
        </View>
      </>
    )
  }

  const footerComponent = () => {
    if (allProduct.isMoreDataLoading) {
      return <ActivityIndicator size={"small"} color={color.darkYellow} />
    }
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={allProduct.productList}
        keyExtractor={(item, id) => id.toString()}
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
        numColumns={2}
        onEndReached={() => allProduct.canLoadMore()}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={footerComponent}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  productOfferStyle: {
    marginLeft: 20,
    marginTop: 28,
  },
  recommendationContainerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 16,
    paddingBottom: 22,
  },
  recommendationSection: {
    marginLeft: 20,
    marginTop: 28,
    paddingBottom: 12,
  },
  textStyle: {
    fontFamily: fonts.manrope.regular,
    fontSize: 30,
    fontWeight: "400",
    letterSpacing: 0.1,
    lineHeight: 38,
  },
})
export default inject("rootStore")(observer(Recommendation))
