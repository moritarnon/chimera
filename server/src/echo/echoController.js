const express = require('express');
const router = express.Router();
const echoService = require('./echoService');

router.post('/insert', (req, res) => {
    echoService.insert(req.body).then(result =>
        res.json(result)
    );
});

router.get('/all', (req, res) => {
    echoService.getAll().then(result =>
        res.json(result)
    );
});

module.exports = router;
