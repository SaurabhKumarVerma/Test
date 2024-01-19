import React, { useState } from "react"
import { StyleSheet, View, Text, TextInput, StyleProp, ViewStyle } from "react-native"
import GroceryIcon, { IconSetName } from "./Icon"
import { color } from "../theme/colors"

interface ISearchBar {
  value?: string
  updateSearch?: any
  style?: StyleProp<ViewStyle>
}
export default function Searchbar(props: ISearchBar) {
  const [query, setQuery] = useState<string>()
  const [error, setError] = useState<boolean>()
  const [errorMessage, setErrorMessage] = useState<string>()
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.searchContainer}>
        <View style={styles.vwSearch}>
          <GroceryIcon
            name="search-outline"
            iconSetName={IconSetName.IONICONS}
            size={20}
            color={color.white}
          />
        </View>

        <TextInput
          value={query}
          placeholder="Search Products or store"
          placeholderTextColor={color.black20}
          style={styles.textInput}
          onChangeText={(text) => {
            const letters = /^$|^[a-zA-Z._\b ]+$/
            if (text.length > 12) setErrorMessage("Query too long.")
            else if (text.match(letters)) {
              setQuery(text)
              props.updateSearch(text)
              if (error) setError(false)
            } else setErrorMessage("Please only enter alphabets")
          }}
        />
      </View>
      {error && <Text style={styles.txtError}>{error}</Text>}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 80,
  },
  searchContainer: {
    backgroundColor: color.darkBlue,
    borderRadius: 28,
    flexDirection: "row",
    height: 56,
    width: "90%",
  },

  textInput: {
    flex: 1,
  },
  txtError: {
    color: color.black10,
    marginTop: "2%",
    width: "89%",
  },
  vwSearch: {
    alignItems: "center",
    flex: 0.2,
    justifyContent: "center",
  },
})
