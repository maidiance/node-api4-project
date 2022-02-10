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

router.post('/login', (req, res) => {
    const user = req.body;
    if( user.username && user.password ) {
        res.status(200).json({message: `Welcome ${user.username}`});
    } else {
        res.status(401).json({message: 'Unsuccessful login'});
    }
});

module.exports(router);