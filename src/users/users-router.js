const express = require('express');

const Users = require('./users-model');

const router = express.Router();

router.get('/', (req, res) => {
    const users = Users.get();
    res.status(200).json(users);
});

router.post('/register', (req, res) => {
    Users.post(req.body);
    res.status(201).json(req.body);
});

module.exports(router);