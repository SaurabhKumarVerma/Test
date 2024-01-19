import React from "react"
import { StyleProp, Text, TextProps, TextStyle } from "react-native"

interface ITextProps extends TextProps {
  text: string
  children?: React.ReactNode
  style?: StyleProp<TextStyle>
}

export const GroceryText = (props: ITextProps) => {
  const { text, children, style, ...rest } = props

  const content = text || children
  return (
    <Text {...rest} style={style}>
      {content}
    </Text>
  )
}
