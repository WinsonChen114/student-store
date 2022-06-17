import * as React from "react"
import "./ProductDetail.css"
import { useParams } from "react-router-dom"
import axios from "axios"
import ProductView from "../ProductView/ProductView"
import NotFound from "../NotFound/NotFound"
import Hero from "../Hero/Hero"

export default function ProductDetail({ handleAddItemToCart, handleRemoveItemFromCart, isFetching = true,
  setIsFetching = () => { }, error, setError = () => { }, shoppingCart }) {
  const [product, setProduct] = React.useState({})
  //Extracts product id from url
  const { productId } = useParams()

  React.useEffect(() => axios.get("https://codepath-store-api.herokuapp.com/store/" + productId)
    .then((response) => {
      setIsFetching(false)
      setProduct(response.data.product)
    })
    .catch((error) => {
      setIsFetching(false)
      setError(error)
      console.log(error)
      return <NotFound />
    }), [])

  return (
      <div className="product-detail">
        {isFetching && <h1 className="loading">Loading...</h1>}
        {!error && <ProductView product={product} productId={productId} quantity={shoppingCart.find(x => x.itemId === product.id)?.quantity}
          handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} shoppingCart={shoppingCart} />}
        {error && <NotFound />}
      </div>
  )
}
