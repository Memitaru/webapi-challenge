const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const server = express();

server.use(express.json());

// Third party middleware

server.use(helmet());
server.use(morgan('dev'));

server.get('/', (req, res) => {
    res.send('First backend sprint challenge!')
})


module.exports = server;