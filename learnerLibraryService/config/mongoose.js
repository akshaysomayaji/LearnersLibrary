var config = require('./config'),
    mongoose = require('mongoose'),mongoClient = require('mongodb').MongoClient;

module.exports = function () {

    mongoose.Promise = global.Promise;
    var db = mongoose.connect(config.db.toString());

    require('../app/models/users.server.model.js');
   
    mongoClient.connect(config.dbname, function (err, db) {
        require('../app/models/notification.server.model.js')(db);
    });
    return db;
};