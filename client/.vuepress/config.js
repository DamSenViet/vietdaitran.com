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

const displayAllHeaders = false;

const navbar = false;

const themeConfig = {
  navbar,
  displayAllHeaders,
};

module.exports = {
  title,
  themeConfig,
  devServer: {
    https: true,
    cert: fs.readFileSync(SSL_CERT),
    key: fs.readFileSync(SSL_KEY),
  },
};