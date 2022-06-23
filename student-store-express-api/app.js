const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const store = require("./routes/store")

const app = express()

app.use(morgan("tiny"))
app.use(express.json())
app.use(cors())
app.use("/store", store)

app.get("/", async (request, response, next) => {
    response.status(200).json({"ping": "pong"})
} )

module.exports = app