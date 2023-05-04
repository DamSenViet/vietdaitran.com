import axios from 'axios';
import qs from 'qs';

const {
  GRECAPTCHA_SECRET_KEY
} = process.env;

const api = axios.create({
  baseURL: "https://www.google.com/recaptcha/api",
  timeout: 10000,
});

const verify = async (
  grecaptchaToken: string,
  remoteip: string
) => {
  const queryParams = qs.stringify({
    secret: GRECAPTCHA_SECRET_KEY,
    response: grecaptchaToken,
    remoteip
  });

  const response = await api.post(`/siteverify${queryParams}`);

  const {
    success,
    "error-codes": errorCodes
  } = response.data;

  return {
    success,
    errorCodes
  }
}

export default {
  verify,
};