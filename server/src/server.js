const app = require("../app");
const databaseConnection = require("./config/data");
const { port } = require("./secret");

app.listen(port, async () => {
  console.log(`Server is running at http://localhost:${port}`);
  await databaseConnection();
});
