﻿var port = 12345;
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
    //db: 'mongodb://49.207.52.49:32/Clustor0',
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