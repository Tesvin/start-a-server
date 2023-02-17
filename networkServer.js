const net = require('net');
const server = net.createServer(function(connectio) {
    console.log('Client connected.');
    connection.on('end', function() {
        console.log('Client disconnected.');
    });
    connection.write('Hello World!\n');
    connection.pipe(connection);
// send data back to connection object which is client
});
server.listen(8080, function() {
    console.log('Server is listen');
});
console.log('Server Program Ended');