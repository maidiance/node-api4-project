const express = require('express');
const server = express();

const usersRouter = require('./users/users-router');

require('dotenv').config();
const PORT = process.env.PORT;

server.use(express.json());
server.use('/api/users', usersRouter);

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

server.use('*', (req, res) => {
    res.send('<h1>Hello, Heroku!</h1>');
});