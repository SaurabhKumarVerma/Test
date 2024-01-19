import { StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"
import { color } from "../../theme/colors"
import { GroceryText } from "../../common/GroceryText"
import { fonts } from "../../theme/typography"
import { FrontSize } from "../../theme/size"
import Searchbar from "../../common/SearchBar"
import UserLocation from "./UserLocation"

const HomeHeader = () => {
  const [value, setValue] = useState<string>()

  function updateSearch(value) {
    console.log(value)
  }
  return (
    <View style={styles.container}>
      <GroceryText text="Hey, Rahul" style={styles.userNameStyle} />
      <View style={styles.searchContainer}>
        <Searchbar value={value} updateSearch={updateSearch} />
      </View>
      <View>
        <UserLocation />
      </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.lightBlue,
    paddingHorizontal: 20,
  },
  searchContainer: {
    marginTop: 36,
  },
  userNameStyle: {
    color: color.white,
    fontFamily: fonts.manrope.semiBold,
    fontSize: FrontSize.label.label2,
    fontWeight: "600",
    marginTop: 50,
  },
})
