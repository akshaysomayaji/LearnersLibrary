var mongoose = require('mongoose'), notification = mongoose.model('notificationDetails');
var NotificationHelper = require('../helpers/genericHelper').commonNotification;
var nPerPage = 2;

exports.addNotification = function (req, res, next) {
    console.log(req.body);
    var notificationObj = new notification(req.body);
    notificationObj.getnotificationid();
    notificationObj.save(function (err, result) {
        if (err) {
            console.log(err);
            res.send({ 'notification': [], success: false, msg: "", err: err });
        } else {
            res.send({ 'notification': result, success: true, msg: "Saved successfully", err: [] });
        }
    });
};


exports.getNotification = function (req, res, next) {
    var pageNumber = req.query.pageNumber;

    notification.find(function (err, result) {
        if (err) {
            res.send({ 'notification': [], success: false, msg: "", err: err, count : 0});
        } else {
            res.send({ 'notification': result, success: true, msg: "", err: [], count: result.length });          
        }
    }).skip( pageNumber > 0 ? ( ( pageNumber - 1 ) * nPerPage ) : 0 )
             .limit( nPerPage );
};

exports.getPaginationArray = function (req, res, next) {
    notification.find(function (err, result) {
        getPager(result.length, req.query.currentPageNumber, nPerPage, res);
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