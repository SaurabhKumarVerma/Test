import { StyleSheet, View } from "react-native"
import React from "react"
import { GroceryText } from "../../common/GroceryText"
import { fonts } from "../../theme/typography"
import { color } from "../../theme/colors"
import GroceryIcon, { IconSetName } from "../../common/Icon"

const UserLocation = () => {
  return (
    <View style={styles.container}>
      <View>
        <GroceryText text="Delivery to" style={styles.location} />
        <View style={styles.locationContainer}>
          <GroceryText text="Green Way 3000, Sylhet" style={styles.street} />
          <View style={styles.iconStyle}>
            <GroceryIcon
              name="down"
              size={12}
              color={color.darkGreyColor}
              iconSetName={IconSetName.ANTDESIGNE}
            />
          </View>
        </View>
      </View>
      <View>
        <GroceryText text="Within" style={styles.location} />
        <View style={styles.locationContainer}>
          <GroceryText text="1 Hour" style={styles.street} />
          <View style={styles.iconStyle}>
            <GroceryIcon
              name="down"
              size={12}
              color={color.darkGreyColor}
              iconSetName={IconSetName.ANTDESIGNE}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default UserLocation

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  iconStyle: {
    alignSelf: "center",
    marginLeft: 4,
    marginTop: 4,
  },
  location: {
    color: color.lightGrey,
    fontFamily: fonts.manrope.bold,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.22,
    opacity: 0.5,
  },
  locationContainer: {
    flexDirection: "row",
  },
  street: {
    color: color.lightGrey,
    fontFamily: fonts.manrope.regular,
    fontSize: 14,
    fontWeight: "500",
    marginTop: 4,
  },
})
