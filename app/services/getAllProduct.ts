import api from "./api"

export const getAllProduct = (limit: number) => {
  return api.get(`/products?${limit}`)
}

export const getProductDetails = (id: number) => {
  return api.get(`/product/${id}`)
}
