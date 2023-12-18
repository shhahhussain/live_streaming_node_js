const config = require("../config");

module.exports = {
  getHealth: async (req, res) => {
    try {
      const healthCheck = {
        uptime: process.uptime(),
        message: "OK",
        timestamp: Date.now(),
      };
      res.success(healthCheck,201);
    } catch (err) {
      res.internalError(err);
    }
  },
  getVersion: async (req, res) => {
    try {
      const versionCheck = {
        version: process.version,
      };
      res.success(versionCheck);
    } catch (err) {
      res.internalError(err);
    }
  },
  getEnvironment: async (req, res) => {
    try {
      const environmentCheck = {
        environment: config.env,
      };
      res.success(environmentCheck);
    } catch (err) {
      res.internalError(err);
    }
  },
};
