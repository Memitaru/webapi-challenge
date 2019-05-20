const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

// Routers

const projectsRouter = require('./projects/projectsRouter');

const server = express();

server.use(express.json());


// Third party middleware

server.use(helmet());
server.use(morgan('dev'));

server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {
    res.send('First backend sprint challenge!')
})


module.exports = server;