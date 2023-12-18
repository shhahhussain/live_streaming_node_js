const path = require("path");
const dotenv = require("dotenv-safe");

// Load environment variables from .env file
dotenv.config({
  path: path.join(__dirname, "../.env"),
  example: path.join(__dirname, "../.env.example"),
});

module.exports = {
  env: process.env.NODE_ENV,
  ip: process.env.IP_ADDRESS,
  port: process.env.PORT,
  baseUrl: process.env.BASE_URL,
  db: {
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
  jwtSecret: process.env.JWT_SECRET,
};
