import axios from "axios";
import { load } from "recaptcha-v3";
const {
  GRECAPTCHA_SITE_KEY,
  API_URL,
} = process.env;

const api = axios.create({
  baseURL: `${API_URL}`,
  timeout: 10000,
});


const sendMail = async (fromEmail, fromName, subject, text) => {
  const recaptcha = await load(GRECAPTCHA_SITE_KEY, {
    autoHideBadge: true,
  });
  const grecaptchaToken = await recaptcha.execute('mail');
  await api.post("/mail", {
    grecaptchaToken,
    fromEmail,
    fromName,
    subject,
    text,
  });
};

export default {
  sendMail,
};