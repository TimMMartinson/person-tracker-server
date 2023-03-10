const mongoose = require("mongoose")

const Schema = mongoose.Schema

const personSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
        age: {
            type: Number,
            required: true,
            min: 1,
            max: 100,
        },
		favoriteFood: {
            type: String,
            required: false
        }
	},
	{
        timestamps: true
    }
)

// mongosh collection characters
const Person = mongoose.model("Person", personSchema)

module.exports = Person