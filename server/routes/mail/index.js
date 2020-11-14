const sendgrid = require("./../../api/sendgrid");
const grecaptcha = require("./../../api/grecaptcha");

module.exports = async function (fastify, opts) {

  fastify.post("/", {}, async (req, reply) => {
    try {
      const {
        grecaptchaToken,
        fromEmail,
        fromName,
        subject,
        text,
      } = req.body;

      if (!grecaptchaToken) {
        reply.send(fastify.httpErrors.unauthorized("missing recaptcha token"));
        return;
      }

      const grecaptchaResult = await grecaptcha.verify(grecaptchaToken, req.ip);

      if (!grecaptchaResult.success) {
        reply.send(fastify.httpErrors.unauthorized("failed recaptcha check"));
        return;
      }

      await sendgrid.sendMail(fromEmail, fromName, subject, text);
      reply.send({});
    }
    catch (error) {
      const message = error.message || "";
      reply.send(fastify.httpErrors.internalServerError(message));
    }
  });

};