export default (url, payload, options = {}) => {
  const fetchOptions = payload
    ? Object.assign({}, { body: payload }, options)
    : {}
  return window.fetch(url, fetchOptions)
    .then(res => {
      return res.json()
    })
}

export const mockRequest = (url, payload, options = {}) => {
  const baseURL = url.replace('http://localhost:3001/')
  if (baseURL === 'seek-people-per-state') {
    return [
      { "state": "Acre", "número de pessoas": 12423 },
      { "state": "Alagoas", "número de pessoas": 24234 },
      { "state": "Amapá", "número de pessoas": 12653 },
      { "state": "Amazonas", "número de pessoas": 27632 },
      { "state": "Bahia", "número de pessoas": 18273 },
      { "state": "Ceará", "número de pessoas": 17264 },
      { "state": "Distrito Federal", "número de pessoas": 8653 },
      { "state": "Espirito Santo", "número de pessoas": 24423 },
      { "state": "Goiás", "número de pessoas": 25621 },
      { "state": "Maranhão", "número de pessoas": 28732 },
      { "state": "Mato Grosso", "número de pessoas": 21235 },
      { "state": "Mato Grosso do Sul", "número de pessoas": 11235 },
      { "state": "Minas Gerais", "número de pessoas": 324235 },
      { "state": "Pará", "número de pessoas": 10293 },
      { "state": "Paraíba", "número de pessoas": 11235 },
      { "state": "Paraná", "número de pessoas": 21235 },
      { "state": "Pernambuco", "número de pessoas": 9382 },
      { "state": "Piauí", "número de pessoas": 29324 },
      { "state": "Rio de Janeiro", "número de pessoas": 192342 },
      { "state": "Rio Grande do Norte", "número de pessoas": 22523 },
      { "state": "Rio Grande do Sul", "número de pessoas": 32019 },
      { "state": "Rondônia", "número de pessoas": 12352 },
      { "state": "Roraima", "número de pessoas": 9821 },
      { "state": "Santa Catarina", "número de pessoas": 44321 },
      { "state": "São Paulo", "número de pessoas": 1235129 },
      { "state": "Sergipe", "número de pessoas": 12489 },
      { "state": "Tocantins", "número de pessoas": 11254 },
    ]
  }
  if (baseURL === 'dengue-per-region') {
    return [
      { "region": "Norte", "número de pessoas": 182423 },
      { "region": "Nordeste", "número de pessoas": 224234 },
      { "region": "Centro-Oeste", "número de pessoas": 102653 },
      { "region": "Sudeste", "número de pessoas": 67632 },
      { "region": "Sul", "número de pessoas": 38273 },
    ]
  }
  if (baseURL === 'mg-top-diseases') {
    return [
      { "doenca": "Dengue", "número de pessoas": 1232 },
      { "doenca": "Flu", "número de pessoas": 32424 },
      { "doenca": "Influenza H1N1", "número de pessoas": 653 },
      { "doenca": "HIV", "número de pessoas": 2500 },
      { "doenca": "Diabetes", "número de pessoas": 3523 },
      { "doenca": "Chagas", "número de pessoas": 534 },
    ]
  }
  if (baseURL === 'flu-per-month') {
    return [
      { "mês": "Janeiro", "pessoas infectadas": 1129319 },
      { "mês": "Fevereiro", "pessoas infectadas": 1122938 },
      { "mês": "Março", "pessoas infectadas": 1312938 },
      { "mês": "Abril", "pessoas infectadas": 1115730 },
      { "mês": "Maio", "pessoas infectadas": 1822938 },
      { "mês": "Junho", "pessoas infectadas": 2112439 },
      { "mês": "Julho", "pessoas infectadas": 3312938 },
      { "mês": "Agosto", "pessoas infectadas": 2122645 },
      { "mês": "Setembro", "pessoas infectadas": 1212129 },
      { "mês": "Outubro", "pessoas infectadas": 812938 },
      { "mês": "Novembro", "pessoas infectadas": 939210 },
      { "mês": "Dezembro", "pessoas infectadas": 1123892 },
    ]
  }
  if (baseURL === 'children-protected-against-poliomielite') {
    return [
      { "region": "Norte", "meninos": 16423, "meninas": 12938 },
      { "region": "Nordeste", "meninos": 14234, "meninas": 15203 },
      { "region": "Centro-Oeste", "meninos": 15923, "meninas": 17201 },
      { "region": "Sudeste", "meninos": 32234, "meninas": 33203 },
      { "region": "Sul", "meninos": 20203, "meninas": 19283 },
    ]
  }
  if (baseURL === 'people-protected-against-flu') {
    return [
      { "state": "Acre", "número de pessoas": 1223 },
      { "state": "Alagoas", "número de pessoas": 2424 },
      { "state": "Amapá", "número de pessoas": 1253 },
      { "state": "Amazonas", "número de pessoas": 2632 },
      { "state": "Bahia", "número de pessoas": 1873 },
      { "state": "Ceará", "número de pessoas": 1264 },
      { "state": "Distrito Federal", "número de pessoas": 6253 },
      { "state": "Espirito Santo", "número de pessoas": 2443 },
      { "state": "Goiás", "número de pessoas": 2562 },
      { "state": "Maranhão", "número de pessoas": 2872 },
      { "state": "Mato Grosso", "número de pessoas": 2125 },
      { "state": "Mato Grosso do Sul", "número de pessoas": 1235 },
      { "state": "Minas Gerais", "número de pessoas": 3235 },
      { "state": "Pará", "número de pessoas": 1293 },
      { "state": "Paraíba", "número de pessoas": 1135 },
      { "state": "Paraná", "número de pessoas": 2135 },
      { "state": "Pernambuco", "número de pessoas": 2382 },
      { "state": "Piauí", "número de pessoas": 2924 },
      { "state": "Rio de Janeiro", "número de pessoas": 8232 },
      { "state": "Rio Grande do Norte", "número de pessoas": 2523 },
      { "state": "Rio Grande do Sul", "número de pessoas": 3019 },
      { "state": "Rondônia", "número de pessoas": 1352 },
      { "state": "Roraima", "número de pessoas": 2981 },
      { "state": "Santa Catarina", "número de pessoas": 4321 },
      { "state": "São Paulo", "número de pessoas": 15129 },
      { "state": "Sergipe", "número de pessoas": 1249 },
      { "state": "Tocantins", "número de pessoas": 1254 },
    ]
  }
  return []
}
