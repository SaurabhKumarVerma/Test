import { action, makeObservable, observable } from "mobx"
import RootStore from "../RootStore"
import { IProduct } from "../../types/productList.interface"

export class CartStore {
  @observable cartItems: IProduct[] = []
  @observable product: IProduct[] = []
  @observable total = 0
  @observable delivery = 2
  rootStore: typeof RootStore

  constructor(rootStore: typeof RootStore) {
    makeObservable(this)
    this.rootStore = rootStore
  }

  @action
  addToCart(item: IProduct) {
    const product = this.cartItems.findIndex((p) => p.id === item.id)

    if (product === -1) {
      this.cartItems.push({ ...item, quantity: 1 })
    } else {
      const data = this.cartItems.find((p) => p.id === item.id)
      data.quantity += 1
    }

    this.total = this.cartItems.reduce(
      (value, currentValue) => value + currentValue.price * currentValue.quantity,
      0,
    )
  }

  @action
  increaseQuantityInCart(item: number) {
    const product = this.cartItems.find((p) => p.id === item)

    if (product) {
      product.quantity += 1
    }
    this.total = this.cartItems.reduce(
      (value, currentValue) => value + currentValue.price * currentValue.quantity,
      0,
    )
  }

  @action
  decreaseQuantityInCart(item: number) {
    const product = this.cartItems.find((p) => p.id === item)

    if (product) {
      product.quantity -= 1
      if (product.quantity === 0) {
        product.quantity += 1
      }
    }
    this.total = this.cartItems.reduce(
      (value, currentValue) => value + currentValue.price * currentValue.quantity,
      0,
    )
  }
}
