import { action, makeObservable, observable } from "mobx"
import RootStore from "../RootStore"
import { IProduct } from "../../types/productList.interface"
import { getAllProduct, getProductDetails } from "../../services/getAllProduct"

export class AllProductStore {
  rootStore: typeof RootStore
  @observable productList: IProduct[] = []
  @observable isLoading: boolean
  @observable limit = 10
  @observable isMoreDataLoading: boolean
  @observable totalCount = 0
  @observable isAllProductLoaded: boolean
  @observable productDetails: IProduct
  @observable isProductDetailLoading: boolean

  constructor(rootStore: typeof RootStore) {
    makeObservable(this)
    this.rootStore = rootStore
  }

  @action
  canLoadMore() {
    if (!this.isAllProductLoaded) {
      this.isLoading = false
      this.limit += 10
      this.isMoreDataLoading = true
      this.getAllProductList()
    } else {
      console.log("All product Loaded...")
    }
  }

  @action
  getAllProductList() {
    getAllProduct(this.limit)
      .then(
        action((response) => {
          this.productList = [...this.productList, ...response.data.products]
          this.isLoading = false
          this.isAllProductLoaded = false
          this.totalCount = response.data.total
          if (this.totalCount <= this.productList.length) {
            this.isAllProductLoaded = true
          }
          this.isMoreDataLoading = false
        }),
      )
      .catch(
        action((error) => {
          console.log(error)
          this.isLoading = false
        }),
      )
  }

  @action
  getProductDetails(id: number) {
    this.isProductDetailLoading = true
    getProductDetails(id)
      .then(
        action((response) => {
          this.productDetails = response.data
          this.isProductDetailLoading = false
        }),
      )
      .catch((error) => {
        this.isProductDetailLoading = false
        console.log("Error In Product Details", error)
      })
  }
}
