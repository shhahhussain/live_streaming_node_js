const config = require("./config");
const env = config.env;
const app = require("./app.js");
const port = config.port;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
  console.log(`Node environment: ${env}`);
});