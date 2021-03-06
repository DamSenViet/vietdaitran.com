const sgMail = require('@sendgrid/mail');
const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendMail = async (fromEmail, fromName, subject, text) => {
  sgMail.send({
    to: {
      name: "Viet Tran",
      email: "vietdaitran1998@gmail.com"
    },
    from: {
      email: fromEmail,
      name: fromName
    },
    subject,
    text
  });
}

module.exports = {
  sendMail,
}