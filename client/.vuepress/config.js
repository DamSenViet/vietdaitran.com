const env = require("./../../etc/env");
env.load();
env.correct();
env.check();
const fs = require("fs");
const {
  SSL_CERT,
  SSL_KEY
} = process.env;

const title = "Viet Tran";

module.exports = {
  title,
  devServer: {
    https: true,
    cert: fs.readFileSync(SSL_CERT),
    key: fs.readFileSync(SSL_KEY),
  },
};