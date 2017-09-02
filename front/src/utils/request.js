export default (url, payload, options = {}) => {
  const fetchOptions = payload
    ? Object.assign({}, { body: payload }, options)
    : {}
  return window.fetch(url, fetchOptions)
    .then(res => {
      return res.json()
    })
}
