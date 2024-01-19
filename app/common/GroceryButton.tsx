import {
  StyleSheet,
  TouchableOpacity,
  ButtonProps,
  FlexAlignType,
  useWindowDimensions,
} from "react-native"
import React from "react"
import { GroceryText } from "./GroceryText"
import { color } from "../theme/colors"
import { fonts } from "../theme/typography"
import { FrontSize } from "../theme/size"

interface IGroceryButton extends ButtonProps {
  confirm?: boolean
  normalButton?: boolean
  block?: boolean
}
const GroceryButton = (props: IGroceryButton) => {
  const { title, ...rest } = props
  const { width } = useWindowDimensions()
  let buttonBackground = color.white
  let buttonTextColor = color.lightBlue
  let buttonBorderColor = color.lightBlue
  let buttonWidth = width - 30

  let alignSelf: FlexAlignType = "center"

  if (props.block) {
    alignSelf = "stretch"
    buttonWidth = width / 2.3
  }

  if (props.confirm) {
    buttonBackground = color.lightBlue
    buttonTextColor = color.white
    buttonBorderColor = color.lightBlue
  }
  return (
    <TouchableOpacity
      {...rest}
      style={[
        styles.buttonContainer,
        {
          borderColor: buttonBorderColor,
          backgroundColor: buttonBackground,
          alignSelf,
          width: buttonWidth,
        },
      ]}
    >
      <GroceryText text={title} style={[styles.textStyle, { color: buttonTextColor }]} />
    </TouchableOpacity>
  )
}

export default GroceryButton

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 20,
    borderWidth: 1,
  },
  textStyle: {
    fontFamily: fonts.manrope.semiBold,
    fontSize: FrontSize.button.button1,
    fontStyle: "normal",
    fontWeight: "600",
    letterSpacing: 1,
    paddingHorizontal: 32,
    paddingVertical: 20,
    textAlign: "center",
  },
})
