const express = require("express")
const morgan = require("morgan")
const store = require("./routes/store")

const app = express()

app.use(morgan("tiny"))
app.use(express.json())
app.use("/store", store)

module.exports = app