/* eslint-disable react/display-name */
import React, { useEffect, useRef } from "react"
import { StyleSheet, Animated, TouchableOpacity } from "react-native"
import { Entypo, AntDesign } from "@expo/vector-icons"
import { color } from "../theme/colors"
import { ScreenName } from "../types/ScreenName/ScreenName"

export default ({ item, accessibilityState, onPress }) => {
  const animatedValues = {
    translate: useRef(new Animated.Value(0)).current,
    scale: useRef(new Animated.Value(0)).current,
  }

  const { translate, scale } = animatedValues

  useEffect(() => {
    handleAnimated()
  }, [accessibilityState.selected])

  const handleAnimated = () => {
    Animated.parallel([
      Animated.timing(translate, {
        toValue: accessibilityState.selected ? 1 : 0,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(scale, {
        toValue: accessibilityState.selected ? 1 : 0,
        duration: 250,
        useNativeDriver: false,
      }),
    ]).start()
  }

  const translateStyles = {
    transform: [
      {
        translateY: translate.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -30],
          extrapolate: "clamp",
        }),
      },
    ],
  }

  const scaleStyles = {
    opacity: scale.interpolate({
      inputRange: [0.5, 1],
      outputRange: [0.5, 1],
      extrapolate: "clamp",
    }),
    transform: [
      {
        scale,
      },
    ],
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Animated.View style={[styles.button, translateStyles]}>
        <Animated.View
          style={[
            {
              width: 50,
              height: 50,
              borderRadius: 100,
              position: "absolute",
              backgroundColor: color.black100,
            },
            scaleStyles,
          ]}
        />
        {item.title === ScreenName.MORE_OPTION_SCREEN ? (
          <Entypo
            name={item.icon}
            color={accessibilityState.selected ? color.darkYellow : color.textColor1}
            size={22}
          />
        ) : (
          <AntDesign
            name={item.icon}
            color={accessibilityState.selected ? color.darkYellow : color.textColor1}
            size={22}
          />
        )}
      </Animated.View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderColor: color.white,
    borderRadius: 25,
    borderWidth: 4,
    height: 50,
    justifyContent: "center",
    overflow: "hidden",
    width: 50,
  },
  container: {
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
    height: 70,
    justifyContent: "center",
  },
  title: {
    bottom: 20,
    color: "#0792b3",
    fontSize: 10,
    fontWeight: "bold",
    position: "absolute",
    textAlign: "center",
  },
})
