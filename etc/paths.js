const path = require('path');

const parent = path.resolve(__dirname);

const pathToRoot = path.resolve(parent, "..");
const pathToClientBuild = path.resolve(pathToRoot, "./client/.vuepress/dist");
const pathToEnv = path.resolve(pathToRoot, "./.env");

module.exports = {
  pathToClientBuild,
  pathToEnv,
};