import React, { PropsWithChildren } from "react"
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  Extrapolate,
  interpolate,
} from "react-native-reanimated"
import { Pressable, StyleSheet } from "react-native"
import GroceryIcon, { IconSetName } from "./Icon"
import { IProduct } from "../types/productList.interface"
import { color } from "../theme/colors"
import { PropsWithStore } from "../store/RootStore"
import { inject, observer } from "mobx-react"

interface ILikedButton {
  addToFav: IProduct
}

const LikeButton = (props: PropsWithStore<PropsWithChildren<ILikedButton>>) => {
  const { FavouriteStore } = props.rootStore

  const liked = useSharedValue(0)

  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
        },
      ],
    }
  })

  const fillStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: liked.value,
        },
      ],
      opacity: liked.value,
    }
  })

  const onPressLinkedButton = () => {
    liked.value = withSpring(liked.value ? 0 : 1)
    FavouriteStore.addToFavorites(props.addToFav)
  }

  return (
    <Pressable
      onPress={() => onPressLinkedButton()}
      hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }}
    >
      <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
        <GroceryIcon name="heart" iconSetName={IconSetName.EVILICONS} size={20} />
      </Animated.View>

      <Animated.View style={fillStyle}>
        <GroceryIcon
          name="heart"
          iconSetName={IconSetName.MATERIALCOMMUNITYICONS}
          size={20}
          color={color.selectedFavorites}
        />
      </Animated.View>
    </Pressable>
  )
}

export default inject("rootStore")(observer(LikeButton))
