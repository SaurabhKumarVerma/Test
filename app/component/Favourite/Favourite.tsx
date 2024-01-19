import { StyleSheet, View } from "react-native"
import React, { PropsWithChildren } from "react"
import { FlatList } from "react-native-gesture-handler"
import { observer } from "mobx-react-lite"
import { inject } from "mobx-react"
import { PropsWithStore } from "../../store/RootStore"
import RecommendedCard from "../../common/RecommendedCard"
import FavouriteHeader from "./FavouriteHeader"
import { GroceryText } from "../../common/GroceryText"
import { fonts } from "../../theme/typography"

const Favourite = (props: PropsWithStore<PropsWithChildren<object>>) => {
  const { FavouriteStore } = props.rootStore

  const renderItem = ({ item }) => {
    return (
      <View style={styles.recommendationContainerStyle}>
        <RecommendedCard isAddedToFav productList={item} />
      </View>
    )
  }

  return (
    <View>
      <View style={styles.container}>
        <FavouriteHeader />
      </View>
      <FlatList
        data={[...FavouriteStore.favouriteList]}
        keyExtractor={(item, id) => id.toString()}
        renderItem={renderItem}
        numColumns={2}
        extraData={FavouriteStore.favouriteList}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <View>
              <GroceryText text="Add Item To Favourite" style={styles.emptyListMessageStyle} />
            </View>
          )
        }}
      />
    </View>
  )
}

export default inject("rootStore")(observer(Favourite))

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  emptyListMessageStyle: {
    fontFamily: fonts.manrope.regular,
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: 2,
    textAlign: "center",
  },
  recommendationContainerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 16,
    paddingBottom: 22,
  },
})
