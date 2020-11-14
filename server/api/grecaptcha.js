const axios = require('axios');
const utils = require('./../../utils');
const {
  GRECAPTCHA_SECRET_KEY
} = process.env;

const api = axios.create({
  baseURL: "https://www.google.com/recaptcha/api",
  timeout: 10000,
});

const verify = async (grecaptchaToken, remoteip) => {
  const queryParams = utils.encodeQueryParams({
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

module.exports = {
  verify,
};