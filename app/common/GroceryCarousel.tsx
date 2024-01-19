import { StyleSheet, View } from "react-native"
import React from "react"
import { SliderBox } from "react-native-image-slider-box"
import { color } from "../theme/colors"

interface IGroceryCarousel {
  imageSet: string[]
}

const GroceryCarousel = (props: IGroceryCarousel) => {
  return (
    <View style={styles.container}>
      <SliderBox
        images={props.imageSet}
        dotColor={color.darkYellow}
        inactiveDotColor={color.black45}
        dotStyle={styles.dotStyles}
        paginationBoxStyle={styles.paginationStyle}
        imageLoadingColor={color.darkYellow}
        ImageComponentStyle={styles.imageStyle}
      />
    </View>
  )
}

export default GroceryCarousel

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  dotStyles: {
    borderRadius: 12,
    width: 28,
  },
  imageStyle: {
    height: 190,
  },
  paginationStyle: {
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
})
