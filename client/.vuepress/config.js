const env = require("./../../etc/env");
env.load();
env.correct();
env.check();
const fs = require("fs");
const webpack = require("webpack");
const {
  SSL_CERT,
  SSL_KEY,
  DEV_HOST,
  DEV_PORT,
} = process.env;

const title = "Viet Tran";
module.exports = {
  title,
  themeConfig: {
    searchPlaceholder: 'Search...'
  },
  devServer: {
    https: true,
    cert: fs.readFileSync(SSL_CERT),
    key: fs.readFileSync(SSL_KEY),
  },
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      config.plugins.push(new webpack.DefinePlugin({
        "process.env": JSON.stringify({
          ...env.buildClient(),
          API_URL: `https://${DEV_HOST}:${DEV_PORT}/api`,
        }),
      }));
    }
    else {

    }
  }
};