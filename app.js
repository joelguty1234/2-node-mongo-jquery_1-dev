const express = require("express")
const app = express()
module.exports = app;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const incidentRouter = require("./routes/incident")
app.use("/api", incidentRouter)