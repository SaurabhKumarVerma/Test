import { AllProductStore } from "./data/AllProductStore"
import { CartStore } from "./data/CartStore"
import { FavouriteStore } from "./data/FavouriteStore"

export type PropsWithStore<T> = T & {
  rootStore?: RootStore
}
class RootStore {
  allProduct: AllProductStore
  CartStore: CartStore
  FavouriteStore: FavouriteStore
  stores: any[]

  constructor() {
    this.allProduct = new AllProductStore(this)
    this.CartStore = new CartStore(this)
    this.FavouriteStore = new FavouriteStore(this)
    this.stores = [this.allProduct, this.FavouriteStore, this.CartStore]
  }
}

export default new RootStore()
