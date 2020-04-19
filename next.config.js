if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

// This logs a warning to export an empty config
// However, I really just needed a place to hook into
// the next lifecycle and require dotenv 🤷🏼‍♀️
module.exports = {};
