import React, { useCallback, useState } from "react"
import FastImage, { FastImageProps } from "react-native-fast-image"

interface IGroceryImage extends FastImageProps {
  onLoad?: (event: any) => void
  defaultHeight?: number
  width: number
  style?: any
}

export default function GroceryImage(props: IGroceryImage) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  })

  const propsOnLoad = props.onLoad
  const onLoad = useCallback(
    (e: any) => {
      const {
        nativeEvent: { width, height },
      } = e
      setDimensions({ width, height })
      if (propsOnLoad) {
        propsOnLoad(e)
      }
    },
    [propsOnLoad],
  )
  return (
    <FastImage
      {...props}
      onLoad={onLoad}
      style={[{ width: props.width, height: props.defaultHeight }, props.style]}
    />
  )
}
