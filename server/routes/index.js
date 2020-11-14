const fs = require('fs');
const path = require('path');

const isDirectory = (source) => fs.lstatSync(source).isDirectory();
const getDirectories = (source) => {
  return fs.readdirSync(source)
    .map((name) => path.join(source, name))
    .filter(isDirectory);
}


const routes = getDirectories(__dirname).map((directory) => {
  const name = `${directory.split(path.sep).pop()}`;
  const module = require(`./${name}`);
  return { name, module };
});

module.exports = async function (fastify, opts) {
  routes.forEach((route) => {
    fastify.register(route.module, {
      prefix: route.name
    });
  });
};