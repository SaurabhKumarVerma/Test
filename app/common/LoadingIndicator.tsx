import { ActivityIndicator, View } from "react-native"
import React from "react"
import { color } from "../theme/colors"

const LoadingIndicator = () => {
  return (
    <View>
      <ActivityIndicator animating color={color.black45} size={"large"} />
    </View>
  )
}

export default LoadingIndicator
