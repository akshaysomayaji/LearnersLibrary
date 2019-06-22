var port = 12345;
var tokenSecret = 'SuperSecret';
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
var domain = 'http://localhost:8080';
var serverUrl = 'http://localhost'

var smtpTransport = nodemailer.createTransport(smtpTransport({
    host: "smtp.gmail.com",
    secureConnection: false,
    port: 587,
    auth: {
        user: "akkie.kicha@gmail.com",
        pass: "9632343752"
    }
}));

var clientConfigObj = {
    url: serverUrl,
    name: "GSTSTAR",
    email: "messenger@gststar.com",             // for sending email
    image: serverUrl + 'img/logo.png'  // this file present in client project

};

var sessiontimeout = 15 * 60;

module.exports = {
    port: port,
    dbname: 'mongodb://dbuser:Password%21@librarycluster-shard-00-00-974x2.mongodb.net:27017,librarycluster-shard-00-01-974x2.mongodb.net:27017,librarycluster-shard-00-02-974x2.mongodb.net:27017/LibraryDb?ssl=true&replicaSet=LibraryCluster-shard-0&authSource=admin&retryWrites=true&w=majority',    
    db:'mongodb://localhost/BloggerDB',
    'secret': 'superawesome',
    tokenSecret: tokenSecret,
    smtp: smtpTransport,
    domain: domain,
    serverUrl: serverUrl,
    clientConfigObj: clientConfigObj,
    sessiondb: 'mongodb://localhost/SessionDb',
    sessiontimeout: sessiontimeout,
}