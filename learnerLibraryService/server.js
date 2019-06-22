process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./config/config'), mongoose = require('./config/mongoose'), express = require('./config/express');
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

var db = mongoose(),
    app = express();
module.exports = app;

var port = config.port;


if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    app.listen(port, function () {
        console.log(`${process.env.NODE_ENV} Server running on ${config.serverUrl} : ${port} at time  ${new Date()}`);
    });
    console.log(`Worker ${process.pid} started`);
}













