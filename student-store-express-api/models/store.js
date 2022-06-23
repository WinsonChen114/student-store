const { storage } = require("../data/storage")
const { BadRequestError } = require("../utils/errors")

class Store {
    static async listProducts() {
        // list all items in the products array
        const products = storage.get("products").value()
        return products
    }

    static async fetchProductById(productId) {
        // fetch a single product
        const product = storage
            .get("products")
            .find({ id: Number(productId) })
            .value()
        return product
    }

    static async recordPurchase(shoppingCart, user) {
        // create a new purchase

        if (!shoppingCart) {
            throw new BadRequestError(`Empty shopping cart sent.`)
        }
        const requiredFields = ["itemId", "quantity"]
        requiredFields.forEach((field) => {
            shoppingCart.forEach((item) => {
                if (!item[field] && item[field] !== 0) {
                    throw new BadRequestError(`Field: "${field}" is required in shoppingCart`)
                }
            })

        })

        const products = await Store.listProducts()
        const productId = products.length + 1
        const createdAt = new Date().toISOString()
        let total = 0
        shoppingCart.forEach((item) => {
            let price = products.find(x => x.id === item.itemId).price
            total += (price * item.quantity) * 1.0875
        })

        const newPurchase = { id: productId, name: user.name, email: user.email, order: { ...shoppingCart }, total, createdAt }

        storage.get("purchases").push(newPurchase).write()

        return newPurchase
    }

}

module.exports = Store