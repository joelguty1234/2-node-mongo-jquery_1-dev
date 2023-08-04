const mongoose = require("mongoose")
const Schema = mongoose.Schema

const incidenSchema = Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    user: {
        type: String,
        require: true
    },
    severity: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        requiere: true,
        default: false
    },
    create_at: {
        type: Date,
        require: true,
        default: Date.now
    }
})

module.exports = mongoose.model("incident", incidenSchema)