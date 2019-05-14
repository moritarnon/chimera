const express = require('express');
const router = express.Router();
const userService = require('./userService');
const redirectHome = require('./redirectHome');

router.post('/register', redirectHome, async (req, res) => {
    userService.register(req.body).then(result =>
        res.json(result));
});

router.post('/login', redirectHome, (req, res, next) => {
    userService.login(req.body, req.session)
        .then((result) => res.json(result))
        .catch(err => next(err));
});

router.post('/logout', async (req, res) => {
    userService.logout(req.body).then(result =>
        res.json(result));
});

module.exports = router;
