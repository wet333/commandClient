const net = require('net');

var socket = new net.Socket();
var client = socket.connect(8300, 'localhost');

client.setEncoding('utf8');

client.on("connect", () => {

    let data = {
        action: 'send',
        message: process.argv[2],
        from: client.localAddress,
        to: process.argv[3]
    }

    data = JSON.stringify(data);

    socket.write(data);

    client.end();
});