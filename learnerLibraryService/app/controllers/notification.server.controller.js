var NotificationHelper = require('../helpers/genericHelper').commonNotification;
var mongoClient = require('../../config/mongoClient');
var nPerPage = 5;
var mongoClient = require('../../config/mongoClient');

exports.addNotification = function (req, res, next) {
    mongoClient.connectDb("notificationDetails").then(function (db) {
        var notificationObj = new notification(req.body);
        notificationObj.getnotificationid();
        req.body.addedOn = new Date().toDateString();
        req.body.active = true;
        req.body.notificationPostedDate = new Date(req.body.notificationPostedDate);
        req.body.notificationId = new Date().getTime().toString();
        console.log(req.body)
        db.db.collection("notificationDetailsCollection").insertOne(req.body, function (err, result) {
            if (err) {
                console.log(err)
                res.send({ 'notification': [], success: false, msg: "", err: err });
            } else {
                res.send({ 'notification': result, success: true, msg: "Saved successfully", err: [] });
            }
        });
    });
};


exports.getNotification = function (req, res, next) {
    mongoClient.connectDb("notificationDetails").then(function (db) {
        var pageNumber = req.query.pageNumber;
        db.db.collection("notificationDetailsCollection").find().skip(pageNumber > 0 ? ((pageNumber - 1) * nPerPage) : 0)
            .limit(nPerPage).toArray(function (err, result) {
                if (err) {
                    res.send({ 'notification': [], success: false, msg: "", err: err, count: 0 });
                } else {
                    res.send({ 'notification': result, success: true, msg: "", err: [], count: result.length });
                }
            });
    });


};

exports.getPaginationArray = function (req, res, next) {
    mongoClient.connectDb("notificationDetails").then(function (db) {
        db.db.collection("notificationDetailsCollection").find().toArray(function (err, result) {
            getPager(result.length, req.query.currentPageNumber, nPerPage, res);
        });
    });
}


function getPager(totalItems, currentPage, pageSize, res) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);
    // ensure current page isn't out of range
    if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    let startPage , endPage;
    if (totalPages <= 10) {
        // less than 10 total pages so show all
        startPage = 1;
        endPage = totalPages;
    } else {
        // more than 10 total pages so calculate start and end pages
        if (currentPage <= 6) {
            startPage = 1;
            endPage = 10;
        } else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
        } else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
        }
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // return object with all pager properties required by the view
    res.send({
        totalItems: totalItems,
        currentPage: parseInt(currentPage),
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    });
}