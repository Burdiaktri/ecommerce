const atlasUrl = process.env.MONGO_DB

const config = {
    atlasUrl,
	options: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
}

module.exports = config