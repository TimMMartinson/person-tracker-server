// command center
const express = require("express")
const mongoose = require("mongoose")

const db = require("./config/db")
const PORT = 8000

const personRoutes = require("./routes/person-routes")

// deprecation warning
mongoose.set("strictQuery", true)

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// starting an express app
const app = express()

app.use(cors({ origin: `http://127.0.0.1:5500`}))

// sending json 
// need to be able to accept json
app.use(express.json())

app.use(personRoutes)

app.listen(PORT, () => {
    console.log("listening on " + PORT)
})

module.exports = app