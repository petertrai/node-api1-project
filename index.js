const server = require('./api/server');

const port = 9000;

// START YOUR SERVER HERE
//starting here
server.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})