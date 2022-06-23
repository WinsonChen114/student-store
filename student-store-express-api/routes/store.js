const express = require("express")
const router = express.Router()
const { NotFoundError } = require("../utils/errors")
const Store = require("../models/store.js")

//Returns products when on store page
router.get("/", async (request, response, next) => {
    try {
        const products = await Store.listProducts()
        response.status(200).json({ products: products })
    } catch (err) {
        next(err)
    }
})

//Get a product by its id
router.get("/:productId", async (request, response, next) => {
    try {
        const productId = request.params.productId
        const product = await Store.fetchProductById(productId)
        if (!product) {
            throw new NotFoundError("Product not found")
        }
        response.status(200).json({ product: product })
    } catch (err) {
        next(err)
    }
})

router.post("/", async (request, response, next) => {
    try {
      const shoppingCart = request.body.shoppingCart
      const user = request.body.user
      const newPurchase = await Store.recordPurchase(shoppingCart, user)
      response.status(201).json({ purchase: newPurchase })
    } catch (err) {
      next(err)
    }
  })

router.post("/", async (request, response, next) => { })



module.exports = router