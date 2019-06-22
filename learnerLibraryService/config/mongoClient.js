var config = require('./config');
var mongoClient = require('mongodb').MongoClient;
var q = require('q');

this.connectDb = function (collection) {
    return new q.Promise(function (resolve, reject) {
        mongoClient.connect(config.dbname, function (err, db) {
            if (db) {
                resolve({ status: true, db: db });
            }
            if (err) {
                reject({ status: false, collection: err });
            }            
        });
    });    
};
