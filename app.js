const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors)
module.exports = app;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const incidentRouter = require("./routes/incident")
app.use("/api", incidentRouter)