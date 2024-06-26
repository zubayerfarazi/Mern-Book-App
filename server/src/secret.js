require("dotenv").config();

const port = process.env.SERVER_PORT || 5555;
const databaseUrl = process.env.MONGOOSE_ATLAS_URL;

module.exports = { port, databaseUrl };
