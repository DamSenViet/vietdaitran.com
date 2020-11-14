const env = require("./../etc/env");
env.load();
env.correct();
env.check();
const fs = require("fs");
const signale = require("signale");
const { pathToClientBuild } = require("./../etc/paths");
const { ifProdVal } = require("./../etc/env");
const {
  SSL_CERT,
  SSL_KEY,
  DEV_HOST,
  DEV_PORT,
} = process.env;

const fastify = require("fastify")({
  logger: true,
  https: {
    cert: fs.readFileSync(SSL_CERT),
    key: fs.readFileSync(SSL_KEY),
  },
  serverFactory: require("fastify-http2https")(),
});

fastify
  .register(require("fastify-helmet"))
  .register(require("fastify-cors"), { origin: ifProdVal(false, true) })
  .register(require("fastify-sensible"))
  .register(require("./routes"), { prefix: "/api" })
  .register(require("fastify-static"), {
    root: pathToClientBuild,
  });



const port = ifProdVal(443, Number.parseInt(DEV_PORT));
const host = ifProdVal("0.0.0.0", DEV_HOST);

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