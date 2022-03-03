const net = require('net');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var socket = new net.Socket();
var client = socket.connect(8300, 'localhost');

client.setEncoding('utf8');

client.on("connect", () => {
    console.log("Connected to the server\n");
    socket.write("Client connected");
});

let i = 0;

client.on('data', (data) => {

    if(data !== "ping"){
        console.log(data);
    }

    if(data === "closeConnection"){
        console.log("Connection closed");
        client.destroy();
    }else{
        readline.question("Enter a new instruccion : ", (line) => {
            if(line === "close client"){
                client.destroy();
            }
            socket.write(line);
        });
    }

})

client.on('error', (err) => {
    console.log("Closing client");
})