"use strict";
const fs = require("fs");
// list of env strings, and if needed to specify via .env
// available only to the build process
const envConfig = {
  NODE_ENV: false,
  SSL_CERT: true,
  SSL_KEY: true,
  SENDGRID_API_KEY: true,
  GRECAPTCHA_SECRET_KEY: true,
  GRECAPTCHA_SITE_KEY: true,
  DEV_HOST: false,
  DEV_PORT: false,
};

const clientEnvConfig = {
  GRECAPTCHA_SITE_KEY: true,
};

// list of env variables to loaded as default
// subset of env config keys
const defaultEnv = {
  NODE_ENV: "development",
  DEV_HOST: "localhost",
  DEV_PORT: "3000",
};

const transformEnv = {
};

const validateEnv = {
  NODE_ENV: () => {
    const { NODE_ENV } = process.env;
    return ["development", "production"].includes(NODE_ENV);
  },
  SSL_CERT: () => {
    const { SSL_CERT } = process.env;
    return fs.existsSync(SSL_CERT);
  },
  SSL_KEY: () => {
    const { SSL_KEY } = process.env;
    return fs.existsSync(SSL_KEY);
  }
};

module.exports = {
  envConfig,
  clientEnvConfig,
  defaultEnv,
  transformEnv,
  validateEnv,
};