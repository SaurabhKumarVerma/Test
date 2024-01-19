import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ScreenName } from "../types/ScreenName/ScreenName"
import HomeScreen from "../screen/HomeScreen/HomeScreen"
import CategoriesScreen from "../screen/CategoriesScreen/CategoriesScreen"
import FavouriteScreen from "../screen/FavouriteScreen/FavouriteScreen"
import { color } from "../theme/colors"
import { StyleSheet } from "react-native"
import MoreOptionScreen from "../screen/MoreOptionScreen/MoreOptionScreen"
import TabButton from "./TabButton"

const Tab = createBottomTabNavigator()
function BottomNavigator() {
  const tabs = [
    {
      id: 1,
      title: ScreenName.HOME,
      screen: ScreenName.HOME,
      icon: "home",
      Component: HomeScreen,
    },
    {
      id: 2,
      title: ScreenName.CATEGORIES_SCREEN,
      screen: ScreenName.CATEGORIES_SCREEN,
      icon: "appstore1",
      Component: CategoriesScreen,
    },
    {
      id: 3,
      title: ScreenName.FAVOURITE_SCREEN,
      screen: ScreenName.FAVOURITE_SCREEN,
      icon: "heart",
      Component: FavouriteScreen,
    },
    {
      id: 4,
      title: ScreenName.MORE_OPTION_SCREEN,
      screen: ScreenName.MORE_OPTION_SCREEN,
      icon: "dots-three-vertical",
      Component: MoreOptionScreen,
    },
  ]

  return (
    <>
      <Tab.Navigator
        initialRouteName={"Home"}
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        {tabs.map((item, index) => (
          <Tab.Screen
            key={item.id}
            name={item.screen}
            component={item.Component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton item={item} {...props} />,
            }}
          />
        ))}
      </Tab.Navigator>
    </>
  )
}
const styles = StyleSheet.create({
  tabBar: {
    alignItems: "center",
    borderColor: color.white,
    borderRadius: 16,
    borderWidth: 0.5,
    bottom: 25,
    height: 70,
    justifyContent: "center",
    marginHorizontal: 16,
    position: "absolute",
  },
})

export default BottomNavigator
