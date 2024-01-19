import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ScreenName } from "../types/ScreenName/ScreenName"
import HomeScreen from "../screen/HomeScreen/HomeScreen"
import CategoriesScreen from "../screen/CategoriesScreen/CategoriesScreen"
import FavouriteScreen from "../screen/FavouriteScreen/FavouriteScreen"
import GroceryIcon, { IconSetName } from "../common/Icon"
import { color } from "../theme/colors"
import { StyleSheet } from "react-native"
import AnimatedTabBar, { TabsConfigsType } from "curved-bottom-navigation-bar"
import MoreOptionScreen from "../screen/MoreOptionScreen/MoreOptionScreen"

const Tab = createBottomTabNavigator()

function BottomNavigator() {
  const tabs: TabsConfigsType = {
    Home: {
      icon: ({ progress, focused }) => (
        <GroceryIcon
          name={focused ? "home-sharp" : "home-outline"}
          iconSetName={IconSetName.IONICONS}
          size={30}
          color={focused ? color.darkYellow : color.black45}
        />
      ),
    },
    Categories: {
      icon: ({ progress, focused }) => (
        <GroceryIcon
          name={focused ? "appstore1" : "appstore-o"}
          iconSetName={IconSetName.ANTDESIGNE}
          size={30}
          color={focused ? color.darkYellow : color.black45}
        />
      ),
    },
    Favourite: {
      icon: ({ progress, focused }) => (
        <GroceryIcon
          name={focused ? "heart" : "hearto"}
          iconSetName={IconSetName.ANTDESIGNE}
          size={30}
          color={focused ? color.darkYellow : color.black45}
        />
      ),
    },
    MoreOptionScreen: {
      icon: ({ progress, focused }) => (
        <GroceryIcon
          name={focused ? "ellipsis-vertical-sharp" : "ellipsis-vertical-outline"}
          iconSetName={IconSetName.IONICONS}
          size={30}
          color={focused ? color.darkYellow : color.black45}
        />
      ),
    },
  }

  return (
    <>
      <Tab.Navigator
        screenOptions={() => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: color.textColor,
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: color.darkYellow,
        })}
        tabBar={(props) => (
          <AnimatedTabBar tabs={tabs} {...props} titleShown={false} dotColor={color.black90} />
        )}
      >
        <Tab.Screen
          name={ScreenName.HOME}
          component={HomeScreen}
          options={() => ({
            tabBarActiveTintColor: color.darkYellow,
          })}
        />
        <Tab.Screen name={ScreenName.CATEGORIES_SCREEN} component={CategoriesScreen} />
        <Tab.Screen name={ScreenName.FAVOURITE_SCREEN} component={FavouriteScreen} />
        <Tab.Screen name={ScreenName.MORE_OPTION_SCREEN} component={MoreOptionScreen} />
      </Tab.Navigator>
    </>
  )
}
const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: color.transparent,
    borderTopWidth: 0,
    height: 58,
    left: 10,
    position: "absolute",
    right: 10,
  },
})

export default BottomNavigator
