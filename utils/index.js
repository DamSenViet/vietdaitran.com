
const encodeQueryParams = (params) => {
  return Object.keys(params).reduce((accum, curr, index) => {
    let query = accum;
    if (index > 0) query += "&";
    return query + `${curr}=${encodeURIComponent(params[curr])}`;
  }, "?");
}

module.exports = {
  encodeQueryParams
};