// URI string
const mongooseBaseName = 'person-tracker'

// if this is a dev env the database name will be person-tracker-development
// if this is a test env the database name will be person-tracker-test
const database = {
	development: `mongodb://localhost/${mongooseBaseName}-development`,
	test: `mongodb://localhost/${mongooseBaseName}-test`,
}

const localDb = process.env.TESTENV ? database.test : database.development

const currentDb = process.env.DB_URI || localDb

module.exports = currentDb