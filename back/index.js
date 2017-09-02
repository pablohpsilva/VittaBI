const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors);

app.get('/seek-people-per-state', function (req, res) {
    const data = [
        {"state": "Acre", "number":"12423"},
        {"state": "Alagoas", "number":"24234"},
        {"state": "Amapá", "number":"12653"},
        {"state": "Amazonas", "number":"27632"},
        {"state": "Bahia", "number":"18273"},
        {"state": "Ceará", "number":"17264"},
        {"state": "Distrito Federal", "number":"8653"},
        {"state": "Espirito Santo", "number":"24423"},
        {"state": "Goiás", "number":"25621"},
        {"state": "Maranhão", "number":"28732"},
        {"state": "Mato Grosso", "number":"21235"},
        {"state": "Mato Grosso do Sul", "number":"11235"},
        {"state": "Minas Gerais", "number":"324235"},
        {"state": "Pará", "number":"10293"},
        {"state": "Paraíba", "number":"11235"},
        {"state": "Paraná", "number":"21235"},
        {"state": "Pernambuco", "number":"9382"},
        {"state": "Piauí", "number":"29324"},
        {"state": "Rio de Janeiro", "number":"192342"},
        {"state": "Rio Grande do Norte", "number":"22523"},
        {"state": "Rio Grande do Sul", "number":"32019"},
        {"state": "Rondônia", "number":"12352"},
        {"state": "Roraima", "number":"9821"},
        {"state": "Santa Catarina", "number":"44321"},
        {"state": "São Paulo", "number":"1235129"},
        {"state": "Sergipe", "number":"12489"},
        {"state": "Tocantins", "number":"11254"}
    ];
    res.send(data);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});