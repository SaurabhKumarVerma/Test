import React from "react"
import AntDesigne from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import Feather from "react-native-vector-icons/Feather"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Fontisto from "react-native-vector-icons/Fontisto"
import Foundation from "react-native-vector-icons/Foundation"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Octicons from "react-native-vector-icons/Octicons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Zocial from "react-native-vector-icons/Zocial"

export enum IconSetName {
  ANTDESIGNE = "AntDesigne",
  FONTAWESOME = "FontAwesome",
  IONICONS = "Ionicons",
  ENTYPO = "Entypo",
  EVILICONS = "EvilIcons",
  FEATHER = "Feather",
  FONTAWESOME5 = "FontAwesome5",
  FONTISTO = "Fontisto",
  FOUNDATION = "Foundation",
  MATERIALCOMMUNITYICONS = "MaterialCommunityIcons",
  MATERIALICONS = "MaterialIcons",
  OCTICONS = "Octicons",
  SIMPLELINEICONS = "SimpleLineIcons",
  ZOCIAL = "Zocial",
}

export interface IconProps {
  size?: number
  name: string
  color?: string
  iconSetName?: IconSetName
  style?: any
}

const iconSets: { [key in IconSetName]: React.ComponentType<any> } = {
  AntDesigne,
  FontAwesome,
  Ionicons,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome5,
  Fontisto,
  Foundation,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
}

function GroceryIcon(props: IconProps) {
  const { name, iconSetName, size = 20, color, style } = props
  const IconComponent = iconSets[iconSetName] || MaterialIcons

  return <IconComponent name={name} size={size} color={color} style={style || {}} />
}

export default GroceryIcon
