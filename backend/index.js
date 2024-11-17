
// Packages
import path from "path"
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import connectDB from "./config/db.js"
import "dotenv/config.js"

const port = process.env.PORT || 5000;

// Utils

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


app.get("/", (req, res) => {
    res.send("Welcome to the Store")
})


app.listen(port, () => console.log(`Server running on port ${port}`))