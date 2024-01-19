import React, { PropsWithChildren, useEffect } from "react"
import { StyleSheet, View } from "react-native"
import { PropsWithStore } from "../../store/RootStore"
import { inject, observer } from "mobx-react"
import Recommendation from "./Recommendation"
import LoadingIndicator from "../../common/LoadingIndicator"

function Home(props: PropsWithStore<PropsWithChildren<object>>) {
  const { allProduct } = props.rootStore

  useEffect(() => {
    allProduct.getAllProductList()
  }, [])

  return (
    <View style={styles.container}>
      {allProduct.isLoading ? (
        <View>
          <LoadingIndicator />
        </View>
      ) : (
        <View>
          <Recommendation />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: "20%",
  },
})
export default inject("rootStore")(observer(Home))
