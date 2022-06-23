const express = require("express")
const router = express.Router()
const { NotFoundError } = require("../utils/errors")
const Store = require("../models/store.js")

//Returns products when on store page
router.get("/", async (req, res, next) => {
    try {
        const products = await Store.listProducts()
        res.status(200).json({ products: products })
    } catch (err) {
        next(err)
    }
})

//Get a product by its id
router.get("/:productId", async (req, res, next) => {
    try {
        const productId = req.params.productId
        const product = await Store.fetchProductById(productId)
        if (!product) {
            throw new NotFoundError("Product not found")
        }
        res.status(200).json({ product: product })
    } catch (err) {
        next(err)
    }
})

router.post("/", async (request, response, next) => { })



module.exports = router