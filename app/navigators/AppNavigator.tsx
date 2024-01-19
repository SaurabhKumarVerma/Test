import React, { useCallback, useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { StackNavigator } from "./StackNavigator"
import * as SplashScreen from "expo-splash-screen"
import { useFonts } from "expo-font"
import { customFontLoad } from "../theme/typography"
import RootStore from "../store/RootStore"
import { SafeAreaView } from "react-native"
import { Provider } from "mobx-react"
import { GestureHandlerRootView } from "react-native-gesture-handler"

SplashScreen.preventAutoHideAsync()

export const AppNavigator = () => {
  const [rootStore] = useState(RootStore)
  const [isLoaded] = useFonts(customFontLoad)
  // const [isIconLoaded] = useFonts(require("../../assets/icons/icomoon.ttf"))

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [isLoaded])

  if (!isLoaded) {
    return null
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Provider rootStore={rootStore} {...rootStore}>
          <NavigationContainer onReady={handleOnLayout}>
            <StackNavigator />
          </NavigationContainer>
        </Provider>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}
