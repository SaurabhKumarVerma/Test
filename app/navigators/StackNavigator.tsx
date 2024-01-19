import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ScreenName } from "../types/ScreenName/ScreenName"
import BottomNavigator from "./BottomNavigator"
import ProductDetailScreen from "../screen/ProductDetailScreen/ProductDetailScreen"
import ShoppingCartScreen from "../screen/ShoppingCartScreen/ShoppingCartScreen"

export const StackNavigator = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Root"} component={BottomNavigator} options={{ headerShown: false }} />
      <Stack.Screen
        name={ScreenName.PRODUCT_DETAIL}
        component={ProductDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenName.SHOPPING_CART}
        component={ShoppingCartScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
