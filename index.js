const server = require('./server.js');

const PORT = process.env.PORT || 5454;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}.`)
})