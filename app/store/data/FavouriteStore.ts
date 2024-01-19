import { action, makeAutoObservable, observable } from "mobx"
import RootStore from "../RootStore"
import { IProduct } from "../../types/productList.interface"

export class FavouriteStore {
  rootStore: typeof RootStore
  @observable favouriteList: Set<IProduct> = new Set()

  constructor(rootStore: typeof RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  @action
  addToFavorites = (item: IProduct): void => {
    if (!this.favouriteList.has(item)) {
      this.favouriteList.add(item)
    } else {
      this.favouriteList.delete(item)
    }
  }
}
