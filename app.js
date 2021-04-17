const express = require('express')
const app = express()
const api = require('./src/api');

app.get('/userMatch', async function (req, res) {
    let userName = req.body.userName;
    let result = await api.getUserMatch(userName);
    res.json(result);
})

app.listen(3000)
