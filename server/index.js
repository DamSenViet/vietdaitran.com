const env = require("./../etc/env");
env.load();
env.correct();
env.check();
const fs = require("fs");
const signale = require("signale");
const { pathToClientBuild } = require ("./../etc/paths");
const { ifProdVal } = require("./../etc/env");
const {
  SSL_CERT,
  SSL_KEY,
} = process.env;

const fastify = require("fastify")({
  logger: false,
  https: {
    cert: fs.readFileSync(SSL_CERT),
    key: fs.readFileSync(SSL_KEY),
  },
  serverFactory: require("fastify-http2https")(),
});

fastify
  .register(require("fastify-helmet"))
  .register(require("fastify-cors"), { origin: false })
  .register(require("fastify-sensible"))
  .register(require("fastify-static"), {
    root: pathToClientBuild,
  });

const port = ifProdVal(443, 8080);
const host = ifProdVal("0.0.0.0", "localhost");

(async () => {
  try {
    await fastify.listen({ port, host });
    signale.success(`Server started at https://${host}:${port}/`);
  }
  catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
})();