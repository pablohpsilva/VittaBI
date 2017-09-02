const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/seek-people-per-state', function (req, res) {
    const data = [
        {"state": "Acre", "número de pessoas": 12423},
        {"state": "Alagoas", "número de pessoas": 24234},
        {"state": "Amapá", "número de pessoas": 12653},
        {"state": "Amazonas", "número de pessoas": 27632},
        {"state": "Bahia", "número de pessoas": 18273},
        {"state": "Ceará", "número de pessoas": 17264},
        {"state": "Distrito Federal", "número de pessoas": 8653},
        {"state": "Espirito Santo", "número de pessoas": 24423},
        {"state": "Goiás", "número de pessoas": 25621},
        {"state": "Maranhão", "número de pessoas": 28732},
        {"state": "Mato Grosso", "número de pessoas": 21235},
        {"state": "Mato Grosso do Sul", "número de pessoas": 11235},
        {"state": "Minas Gerais", "número de pessoas": 324235},
        {"state": "Pará", "número de pessoas": 10293},
        {"state": "Paraíba", "número de pessoas": 11235},
        {"state": "Paraná", "número de pessoas": 21235},
        {"state": "Pernambuco", "número de pessoas": 9382},
        {"state": "Piauí", "número de pessoas": 29324},
        {"state": "Rio de Janeiro", "número de pessoas": 192342},
        {"state": "Rio Grande do Norte", "número de pessoas": 22523},
        {"state": "Rio Grande do Sul", "número de pessoas": 32019},
        {"state": "Rondônia", "número de pessoas": 12352},
        {"state": "Roraima", "número de pessoas": 9821},
        {"state": "Santa Catarina", "número de pessoas": 44321},
        {"state": "São Paulo", "número de pessoas": 1235129},
        {"state": "Sergipe", "número de pessoas": 12489},
        {"state": "Tocantins", "número de pessoas": 11254},
    ];
    res.json(data);
});

app.get('/mg-top-diseases', function (req, res) {
    const data = [
        {"doenca": "Dengue", "número de pessoas": 1232},
        {"doenca": "Flu", "número de pessoas": 32424},
        {"doenca": "Influenza H1N1", "número de pessoas": 653},
        {"doenca": "HIV", "número de pessoas": 2500},
        {"doenca": "Diabetes", "número de pessoas": 3523},
        {"doenca": "Chagas", "número de pessoas": 534},
    ];
    res.json(data);
});

app.get('/dengue-per-region', function (req, res) {
    const data = [
        {"region": "Norte", "número de pessoas": 182423},
        {"region": "Nordeste", "número de pessoas": 224234},
        {"region": "Centro-Oeste", "número de pessoas": 102653},
        {"region": "Sudeste", "número de pessoas": 67632},
        {"region": "Sul", "número de pessoas": 38273},
    ];
    res.json(data);
});

app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});